const animation = (p) => {
  let CANVAS_WIDTH = 100;
  let CANVAS_HEIGHT = 100;
  let rotationAngle = 0;

  p.setup = () => {
    const thumbnailId = "project-thumbnail";
    const thumbnail = document.getElementById(thumbnailId);

    CANVAS_WIDTH = thumbnail.offsetWidth;
    CANVAS_HEIGHT = thumbnail.offsetHeight;
    const canvas = p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(thumbnailId);

    drawBackground(canvas);
  };

  p.draw = () => {
    // Draw and move the shape
    drawBackground({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });
    rotationAngle += 0.8;
    const innerRadius = CANVAS_WIDTH * 0.015;
    const outerRadius = innerRadius * 1.4;
    const nbTooth = 8;
    addGear(
      p.mouseX,
      p.mouseY,
      rotationAngle,
      innerRadius,
      outerRadius,
      nbTooth
    );
  };

  p.windowResized = () => {
    // Resize canvas if window changes size
    const container = document.getElementById("project-thumbnail");
    CANVAS_WIDTH = container.offsetWidth;
    CANVAS_HEIGHT = container.offsetHeight;
    p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    drawBackground({
      width: container.offsetWidth,
      height: container.offsetHeight,
    });
  };

  function drawBackground(canvas) {
    p.background(40);
    // Start in the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const gearInnerRadius = canvas.width * 0.015;
    const gearOuterRadius = gearInnerRadius * 1.4;
    const pitchRadius = (gearInnerRadius + gearOuterRadius) / 2.0;
    const nbTooth = 8;

    // Add static background
    addGear(0, 0, 0, gearInnerRadius, gearOuterRadius, nbTooth);

    addGear(
      2 * pitchRadius,
      pitchRadius,
      30,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      2 * pitchRadius,
      3.1 * pitchRadius,
      40,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(0, canvas.height, 0, gearInnerRadius, gearOuterRadius, nbTooth);

    addGear(
      2 * pitchRadius,
      canvas.height - 1 * pitchRadius,
      15,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      3 * pitchRadius,
      canvas.height - 2.9 * pitchRadius,
      15,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      centerX,
      2 * pitchRadius,
      0,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      centerX - 2 * pitchRadius,
      1.2 * pitchRadius,
      25,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      centerX + 2 * pitchRadius,
      1.2 * pitchRadius,
      25,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(canvas.width, 0, 0, gearInnerRadius, gearOuterRadius, nbTooth);

    addGear(
      canvas.width - 1.5 * pitchRadius,
      1.5 * pitchRadius,
      30,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      canvas.width - 3 * pitchRadius,
      3 * pitchRadius,
      35,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      canvas.width,
      canvas.height,
      0,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      canvas.width - 1.8 * pitchRadius,
      canvas.height - pitchRadius,
      30,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );

    addGear(
      canvas.width - 3.8 * pitchRadius,
      canvas.height - 1.5 * pitchRadius,
      22,
      gearInnerRadius,
      gearOuterRadius,
      nbTooth
    );
  }

  function drawGear(innerRadius = 10, outerRadius = 20, nbTooth = 8) {
    p.noFill();
    p.stroke(255);
    p.circle(0, 0, 0.4 * innerRadius * 2);

    const angleRadStep = (2 * Math.PI) / nbTooth;
    const halfAngleRadStep = angleRadStep / 2.0;
    const quartAngleRadStep = halfAngleRadStep / 2.0;

    for (let i = 0; i < nbTooth; i++) {
      const curAngleRad = i * angleRadStep;

      p.push();
      p.angleMode(p.RADIANS);

      p.rotate(curAngleRad);
      p.beginShape();

      const x1 = -innerRadius * Math.sin(quartAngleRadStep);
      const y1 = innerRadius * Math.cos(quartAngleRadStep);
      p.vertex(x1, y1);

      const x2 = 0.75 * x1;
      const y2 = outerRadius * Math.cos(quartAngleRadStep);
      p.vertex(x2, y2);

      const x3 = -x2;
      const y3 = y2;
      p.vertex(x3, y3);

      const x4 = -x1;
      const y4 = y1;
      p.vertex(x4, y4);
      p.endShape();

      p.arc(
        0,
        0,
        2 * innerRadius,
        2 * innerRadius,
        quartAngleRadStep,
        3 * quartAngleRadStep
      );
      p.pop();
    }
  }

  function addGear(x, y, angleDeg, gearInnerRadius, gearOuterRadius, nbTooth) {
    p.push();
    p.translate(x, y);
    p.angleMode(p.DEGREES);

    p.rotate(angleDeg);
    drawGear(gearInnerRadius, gearOuterRadius, nbTooth);
    p.pop();
  }
};

new p5(animation);
