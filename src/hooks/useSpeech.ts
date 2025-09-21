// src/hooks/useSpeech.ts

function looksFemale(v: SpeechSynthesisVoice) {
  return /(female|여성|yuna|mina|sora|sunhi|seo|hee|min|hye|yuri|ara|sumin)/i.test(v.name);
}
function isGoogleVoice(v: SpeechSynthesisVoice) {
  return /google/i.test(v.name) || /google/i.test(v.voiceURI);
}

export function useSpeech(
  pref: { langStartsWith?: string; preferFemale?: boolean; googleOnly?: boolean } = {
    langStartsWith: "ko",
    preferFemale: true,
    googleOnly: true,
  }
) {
  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);

  const pickInitial = (list: SpeechSynthesisVoice[]) => {
    let pool = list;
    if (pref.googleOnly) pool = pool.filter(isGoogleVoice);
    if (pref.langStartsWith) {
      const lang = pref.langStartsWith.toLowerCase();
      pool = pool.filter(v => (v.lang || "").toLowerCase().startsWith(lang));
    }
    if (pref.preferFemale) {
      const f = pool.find(looksFemale);
      if (f) return f;
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return pool[0] ?? list[0] ?? null;
  };

  useEffect(() => {
    if (!supported) return;
    const load = () => {
      const all = window.speechSynthesis.getVoices();
      const filtered = pref.googleOnly ? all.filter(isGoogleVoice) : all;
      setVoices(filtered);
      setCurrentVoice(cv => cv ?? pickInitial(all));
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, [supported]);

  const speak = (text: string, opts?: { onend?: () => void }) => {
    if (!supported || !text.trim()) return;
    const u = new SpeechSynthesisUtterance(text);
    if (currentVoice) {
      u.voice = currentVoice;
      u.lang  = "ko-KR";
    } else {
      u.lang  = "ko-KR";
    }
    u.rate = rate;
    u.onend = () => { setSpeaking(false); setPaused(false); opts?.onend?.(); };
    setSpeaking(true); setPaused(false);
    window.speechSynthesis.speak(u);
  };

  const cancel = () => { if (supported) { window.speechSynthesis.cancel(); setSpeaking(false); setPaused(false); } };
  const pause  = () => { if (supported && window.speechSynthesis.speaking) { window.speechSynthesis.pause(); setPaused(true); } };
  const resume = () => { if (supported && window.speechSynthesis.paused)   { window.speechSynthesis.resume(); setPaused(false); } };

  const setVoiceByURI = (voiceURI: string) => {
    const v = voices.find(vv => vv.voiceURI === voiceURI);
    if (v) setCurrentVoice(v);
  };

  return { supported, voices, currentVoice, setVoiceByURI, speaking, paused, rate, setRate, speak, pause, resume, cancel };
}

// React import
import { useEffect, useState } from "react";
