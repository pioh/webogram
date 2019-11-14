let bgcolors = [
  "#cc90e2",
  "#80d066",
  "#ecd074",
  "#6fb1e4",
  "#e57979",
  "#f98bae",
  "#73cdd0",
  "#fba76f"
];
export function getBgColor(s: string | number) {
  let i = 0;
  if (typeof s === "string") s.split("").map(v => (i += v.charCodeAt(0)));
  else i += s;
  i = Math.abs(Math.ceil(Math.sin(i) * 1000)) % bgcolors.length;
  console.log(i);
  return bgcolors[i];
}
