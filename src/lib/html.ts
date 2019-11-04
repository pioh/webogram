export function html<T>(html: TemplateStringsArray, ...keys: any) {
  let template = document.createElement("template");
  template.innerHTML = html
    .reduce((out, next, i) => out + next + keys[i], "")
    .trim();
  return (template.content.firstChild as unknown) as T;
}
