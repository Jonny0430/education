import { api } from "../config/api/config";

export function buildAvatarSrc(path?: string) {
  if (!path) return undefined;
  // to'liq http(s) bo'lsa – aynan o'shani ishlatamiz
  if (/^https?:\/\//i.test(path)) return path;
  // nisbiy bo'lsa – API_BASE bilan birlashtiramiz
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `${api.defaults.baseURL}/${path.replace(/^\/+/, "")}`;
}