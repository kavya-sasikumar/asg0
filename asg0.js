function main() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function cc(x, y) {
  return [x * 20 + 200, -y * 20 + 200];
}

function drawVector(vector, color) {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let [x, y] = cc(vector.elements[0], vector.elements[1]);

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function handleDrawEvent() {
  let x = parseFloat(document.getElementById("input-v1-x").value);
  let y = parseFloat(document.getElementById("input-v1-y").value);
  let x2 = parseFloat(document.getElementById("input-v2-x").value);
  let y2 = parseFloat(document.getElementById("input-v2-y").value);
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let v1 = new Vector3([x, y, 0]);
  drawVector(v1, "red");
  let v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
  let x1 = parseFloat(document.getElementById("input-v1-x").value);
  let y1 = parseFloat(document.getElementById("input-v1-y").value);
  let x2 = parseFloat(document.getElementById("input-v2-x").value);
  let y2 = parseFloat(document.getElementById("input-v2-y").value);
  let scalar = parseFloat(document.getElementById("scalar-value").value);
  let operation = document.getElementById("math-op").value;

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let v1 = new Vector3([x1, y1, 0]);
  let v2 = new Vector3([x2, y2, 0]);

  drawVector(v1, "red");
  drawVector(v2, "blue");

  if (operation === "add") {
    let result = new Vector3(v1.elements).add(v2);
    drawVector(result, "green");
  } else if (operation === "sub") {
    let result = new Vector3(v1.elements).sub(v2);
    drawVector(result, "green");
  } else if (operation === "mul") {
    let result1 = new Vector3(v1.elements).mul(scalar);
    let result2 = new Vector3(v2.elements).mul(scalar);
    drawVector(result1, "green");
    drawVector(result2, "green");
  } else if (operation === "div") {
    let result1 = new Vector3(v1.elements).div(scalar);
    let result2 = new Vector3(v2.elements).div(scalar);
    drawVector(result1, "green");
    drawVector(result2, "green");
  } else if (operation === "magnitude") {
    console.log("v1 magnitude:", v1.magnitude());
    console.log("v2 magnitude:", v2.magnitude());
  } else if (operation === "normalize") {
    let n1 = new Vector3(v1.elements).normalize();
    let n2 = new Vector3(v2.elements).normalize();
    drawVector(n1, "green");
    drawVector(n2, "green");
  } else if (operation === "angle") {
    angelofmid(v1, v2);
  } else if (operation === "area") {
    areaoftriangle(v1, v2);
  }
}

function angleofmid(v1, v2) {
  let dot = Vector3.dot(v1, v2);
  let m1 = v1.magnitude();
  let m2 = v2.magnitude();
  let angle = Math.acos(dot / (m1 * m2));
  let degrees = angle * (180 / Math.PI);
  console.log("v1 and v2 angel:", degrees.toFixed(2), "degrees");
}

function areaoftriangle(v1, v2) {
  let cross = Vector3.cross(v1, v2);
  let area = 0.5 * cross.magnitude();
  console.log("v1 and v2 area of triangle:", area.toFixed(2));
}