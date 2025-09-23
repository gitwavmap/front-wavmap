globalThis.process ??= {}; globalThis.process.env ??= {};
import { l as le, j as ju, n as ne, p as pe } from './index_B9RZUytk.mjs';

function createDirectusClient(directusUrl) {
  const client = le(directusUrl).with(ju()).with(ne("cookie", { credentials: "include" }));
  return client;
}
function createTokenClient(token, directusUrl) {
  const tokenClient = le(directusUrl).with(ju()).with(pe(token));
  return tokenClient;
}

export { createDirectusClient as a, createTokenClient as c };
