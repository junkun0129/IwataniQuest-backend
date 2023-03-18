const config = require("../config");
const walkingPerson = [];
module.exports = (http) => {
  const soketIO = require("socket.io")(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  soketIO.on("connection", (socket) => {
    // console.log(">>>>>>>", socket, ">>>>>>>>>")

    socket.on("oi", (data) => {
      console.log(data, "ikuzoooooooooooooo");
    });

    socket.on("encount", (data) => {
      if (data === "hit") {
        socket.emit("screenSwitch", "hit");
      }
    });

    socket.on("back", (data) => {
      if (data == "backback") {
        socket.emit("backSwitch", "backback");
        console.log("kaettekitaOoo");
      }
    });

    socket.on("save", (data) => {
      console.log(data, "rthis");
      socket.emit("save", "save");
    });

    socket.on("walk", (data) => {
      //   console.log(data);

      const isLogin = walkingPerson.find((each) => each.email === data.email);
      if (!isLogin) {
        walkingPerson.push(data);
      } else {
        console.log("there si");
        walkingPerson.map((element) => {
          //   console.log(element.email, data.email);
          console.log(data.x, element.x);
          return 5;
        });
      }

      console.log(walkingPerson);
    });
  });
};
