export const OWNER = "cgi-bin";
export const REPO = "qm/qr?_wv=1027&k=zu9GwYV_G4QoaAgLLHupQe6uhVkRHLS4&authKey=PdnVbJpRjMd7Cc%2BjIq2eoKxC3WcZ8fb8NcgAuD8R5hTmmQdgVzhQwKmMNF2OwjcL&noverify=0&group_code=594122721";
export const REPO_URL = `http://qm.qq.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/Yidadaa/ChatGPT-Next-Web/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";
