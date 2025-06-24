const animation = (p) => {
  const THUMBNAIL_ID = "project-thumbnail";
  let canvasWidth = 100;
  let canvasHeight = 100;
  let rotationAngle = 0;
  let bgLayer;

  p.setup = () => {
    const container = document.getElementById(THUMBNAIL_ID);
    canvasWidth = container.offsetWidth;
    canvasHeight = container.offsetHeight;

    const canvas = p.createCanvas(canvasWidth, canvasHeight);
    canvas.parent(THUMBNAIL_ID);

    bgLayer = p.createGraphics(canvasWidth, canvasHeight);
    drawStaticBackground(bgLayer);
  };

  p.draw = () => {
    // Draw cached background
    p.image(bgLayer, 0, 0);

    // Animated gear following mouse
    rotationAngle += 0.8;
    const innerRadius = canvasWidth * 0.015;
    const outerRadius = innerRadius * 1.4;
    const nbTooth = 8;
    addGear(p, p.mouseX, p.mouseY, rotationAngle, innerRadius, outerRadius, nbTooth);
  };

  p.windowResized = () => {
    const container = document.getElementById(THUMBNAIL_ID);
    canvasWidth = container.offsetWidth;
    canvasHeight = container.offsetHeight;
    p.resizeCanvas(canvasWidth, canvasHeight);

    // Rebuild cached background
    bgLayer = p.createGraphics(canvasWidth, canvasHeight);
    drawStaticBackground(bgLayer);
  };

  function drawStaticBackground(pg) {
    pg.background(40);
    const centerX = pg.width / 2;
    const centerY = pg.height / 2;

    const innerRadius = pg.width * 0.015;
    const outerRadius = innerRadius * 1.4;
    const pitchRadius = (innerRadius + outerRadius) / 2;
    const nbTooth = 8;

    const positions = [
      [0, 0, 0],
      [2 * pitchRadius, pitchRadius, 30],
      [2 * pitchRadius, 3.1 * pitchRadius, 40],
      [0, pg.height, 0],
      [2 * pitchRadius, pg.height - pitchRadius, 15],
      [3 * pitchRadius, pg.height - 2.9 * pitchRadius, 15],
      [centerX, 2 * pitchRadius, 0],
      [centerX - 2 * pitchRadius, 1.2 * pitchRadius, 25],
      [centerX + 2 * pitchRadius, 1.2 * pitchRadius, 25],
      [pg.width, 0, 0],
      [pg.width - 1.5 * pitchRadius, 1.5 * pitchRadius, 30],
      [pg.width - 3 * pitchRadius, 3 * pitchRadius, 35],
      [pg.width, pg.height, 0],
      [pg.width - 1.8 * pitchRadius, pg.height - pitchRadius, 30],
      [pg.width - 3.8 * pitchRadius, pg.height - 1.5 * pitchRadius, 22],
    ];

    positions.forEach(([x, y, angle]) =>
      addGear(pg, x, y, angle, innerRadius, outerRadius, nbTooth)
    );
  }

  function addGear(pg, x, y, angleDeg, innerRadius, outerRadius, nbTooth) {
    pg.push();
    pg.translate(x, y);
    pg.angleMode(p.DEGREES);
    pg.rotate(angleDeg);
    drawGear(pg, innerRadius, outerRadius, nbTooth);
    pg.pop();
  }

  function drawGear(pg, innerRadius = 10, outerRadius = 20, nbTooth = 8) {
    pg.noFill();
    pg.stroke(255);
    pg.circle(0, 0, 0.4 * innerRadius * 2);

    const angleStep = (2 * Math.PI) / nbTooth;
    const halfStep = angleStep / 2;
    const quarterStep = halfStep / 2;

    for (let i = 0; i < nbTooth; i++) {
      const curAngle = i * angleStep;

      pg.push();
      pg.angleMode(p.RADIANS);
      pg.rotate(curAngle);
      pg.beginShape();

      const x1 = -innerRadius * Math.sin(quarterStep);
      const y1 = innerRadius * Math.cos(quarterStep);
      pg.vertex(x1, y1);

      const x2 = 0.75 * x1;
      const y2 = outerRadius * Math.cos(quarterStep);
      pg.vertex(x2, y2);
      pg.vertex(-x2, y2);
      pg.vertex(-x1, y1);

      pg.endShape();

      pg.arc(0, 0, 2 * innerRadius, 2 * innerRadius, quarterStep, 3 * quarterStep);
      pg.pop();
    }
  }
};

new p5(animation);
