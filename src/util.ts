export * from "./util/coordinate";
export * from "./util/is_celery_script";
export * from "./util/is_node";
export * from "./util/pick";
export * from "./util/rpc_request";
export * from "./util/uuid";

export function stringToBuffer(str: string) {
  const regular_array = str.split("").map(x => x.charCodeAt(0));
  const data16 = new Uint8Array(regular_array);
  return data16;
}

/** We origianlly called buffer.toString(),
 *  but that suffers from inconsistent behavior
 * between environments, leading to testing
 * difficulty. */
export function bufferToString(buffer: Uint8Array) {
  const chars: string[] = [];
  buffer.forEach(x => chars.push(String.fromCharCode(x)));
  return chars.join("");
}
