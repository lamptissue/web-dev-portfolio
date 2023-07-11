export function skillsMatter() {
  const { Engine, Render, Composite, Composites, Bodies, MouseConstraint, Runner } = Matter;

  const engine = Engine.create();

  let w;
  let h;

  if (window.innerWidth > 900) {
    w = window.innerWidth / 2 - 20;
    h = window.innerHeight / 2 + 50;
  } else {
    w = window.innerWidth - 20;
    h = window.innerHeight / 2;
  }

  const skills = document.querySelector("div.skills-matter");
  const skillsRect = skills.getBoundingClientRect();

  const renderer = Render.create({
    element: skills,
    engine: engine,
    options: {
      // background: "#d8f9ff",
      // background: "#ffdde2",
      background: "#f5f5f5",
      wireframes: false,
      pixelRatio: window.devicePixelRatio,
      width: w,
      height: h,
    },
  });

  const mouseControl = MouseConstraint.create(engine, {
    element: skills,
    constraint: {
      render: {
        visible: false,
      },
    },
  });

  //Delete these later

  const html = Bodies.rectangle(40, 150, 75, 85, {
    render: {
      sprite: {
        texture: "../logos/html.png",
      },
    },
  });

  const wordpress = Bodies.circle(400, 200, 42, {
    render: {
      sprite: {
        texture: "../logos/wordpress.png",
      },
    },
  });

  const css = Bodies.rectangle(400, 200, 75, 85, {
    render: {
      sprite: {
        texture: "../logos/css.png",
      },
    },
  });

  const bootstrap = Bodies.rectangle(400, 200, 80, 68, {
    render: {
      sprite: {
        texture: "../logos/bootstrap.png",
      },
    },
  });

  const figma = Bodies.rectangle(400, 20, 57, 85, {
    render: {
      sprite: {
        texture: "../logos/figma.png",
      },
    },
  });

  const javascript = Bodies.rectangle(300, 20, 80, 80, {
    render: {
      sprite: {
        texture: "../logos/javascript.png",
      },
    },
  });

  const node = Bodies.rectangle(400, 200, 75, 85, {
    render: {
      sprite: {
        texture: "../logos/node.png",
      },
    },
  });

  const adobe = Bodies.rectangle(400, 200, 85, 77, {
    render: {
      sprite: {
        texture: "../logos/adobe.png",
      },
    },
  });

  const react = Bodies.circle(450, 300, 36, {
    frictionAir: 0.1,
    render: {
      sprite: {
        texture: "../logos/react.png",
      },
    },
  });

  const mongo = Bodies.rectangle(400, 200, 38, 85, {
    render: {
      sprite: {
        texture: "../logos/mongo.png",
      },
    },
  });

  // let bigBall;
  // if (window.innerWidth < 1500) {
  //   bigBall = Bodies.rectangle(w / 2, h / 2, 320, 15, {
  //     isStatic: true,
  //     angle: Math.PI * 0.07,
  //     render: { fillStyle: "#FF5D3F" },
  //   });
  // } else {
  //   bigBall = Bodies.rectangle(w / 2, h / 2, 320, 15, {
  //     isStatic: true,
  //     angle: Math.PI * 0.07,
  //     render: { fillStyle: "blue" },
  //   });

  let bigHead = Bodies.circle(w / 2, h / 2, 75, {
    isStatic: true,
    render: {
      sprite: {
        texture: "../logos/bigHead.png",
      },
    },
  });

  // const getRandomShape = function (x, y) {
  //   const shapes = [
  //     Bodies.rectangle(x, y, 62, 70, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/html.png",
  //         },
  //       },
  //     }),

  //     Bodies.circle(x, y, 35, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/wordpress.png",
  //         },
  //       },
  //     }),

  //     Bodies.rectangle(x, y, 63, 70, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/css.png",
  //         },
  //       },
  //     }),

  //     Bodies.rectangle(x, y, 70, 56, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/bootstrap.png",
  //         },
  //       },
  //     }),
  //     Bodies.rectangle(x, y, 47, 70, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/figma.png",
  //         },
  //       },
  //     }),

  //     Bodies.rectangle(x, y, 70, 70, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/javascript.png",
  //         },
  //       },
  //     }),

  //     Bodies.rectangle(x, y, 62, 70, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/node.png",
  //         },
  //       },
  //     }),
  //     Bodies.rectangle(x, y, 70, 64, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/adobe.png",
  //         },
  //       },
  //     }),
  //     Bodies.circle(x, y, 30, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/react.png",
  //         },
  //       },
  //     }),
  //     Bodies.rectangle(x, y, 45, 100, {
  //       render: {
  //         sprite: {
  //           texture: "../logos/mongo.png",
  //         },
  //       },
  //     }),
  //   ];

  //   const randomIndex = Math.floor(Math.random() * shapes.length);
  //   return shapes[randomIndex];
  // };

  // skills.addEventListener("click", function (event) {
  //   const shape = getRandomShape(event.pageX - skillsRect.left, event.pageY - skillsRect.top);
  //   Composite.add(engine.world, shape);
  // });

  const wallOptions = {
    isStatic: true,
    render: {
      visible: false,
    },
  };

  const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions);
  const ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions);
  const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions);
  const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions);

  // const initialShapes = Composites.stack(50, 50, 5, 3, 40, 40, function (x, y) {
  //   return getRandomShape(x, y);
  // });

  Composite.add(engine.world, [
    ground,
    bigHead,
    html,
    css,
    bootstrap,
    javascript,
    wordpress,
    react,
    mongo,
    adobe,
    node,
    figma,
    ceiling,
    leftWall,
    rightWall,
    // initialShapes,
    mouseControl,
  ]);

  Render.run(renderer);

  const runner = Runner.create();
  Runner.run(runner, engine);

  let time = 0;
  const changeGravity = function () {
    time = time + 0.003;

    engine.world.gravity.y = Math.cos(time);

    requestAnimationFrame(changeGravity);
  };

  changeGravity();
}
