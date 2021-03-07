import axios from "axios";

export class Quiz {
  static sendDataToQuiz = async function (
    nombre,
    asignatura,
    tiempo,
    fechaEntrega,
    descripcion
  ) {
    try {
      const res = await axios({
        method: "POST",
        url: `http://127.0.0.1:3000/api/v1/quiz`,
        data: {
          nombre,
          asignatura,
          tiempo,
          fechaEntrega,
          descripcion,
        },
      });
      if (res.data.status === "success") {
        window.setTimeout(() => {
          location.assign("http://127.0.0.1:3000/questions/create");
        }, 1500);
      }
      return res.data.quiz._id;
    } catch (err) {
      console.log("Hubo un serio error gilipollas!!!");
    }
  };

  static endQuiz = async function (quizId) {
    try {
      await axios.patch(`http://127.0.0.1:3000/api/v1/quiz/${quizId}/edit`);
    } catch (err) {
      console.log("Hubo un error en el axios de endQuiz");
    }
  };
}
