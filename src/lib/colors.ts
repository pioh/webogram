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

let colors = [
  "#8365ab",
  "#539e4f",
  "#ae9661",
  "#4979a3",
  "#b7635d",
  "#b3577a",
  "#5397b4",
  "#c07844"
];

export function getBgColor(s: string | number) {
  let i = 0;
  if (typeof s === "string") s.split("").map(v => (i += v.charCodeAt(0)));
  else i += s;
  i = Math.abs(Math.ceil(Math.sin(i) * 1000)) % bgcolors.length;
  return bgcolors[i];
}

export function getUserColor(s: string | number) {
  let i = 0;
  if (typeof s === "string") s.split("").map(v => (i += v.charCodeAt(0)));
  else i += s;
  i = Math.abs(Math.ceil(Math.sin(i) * 1000)) % colors.length;
  return colors[i];
}
