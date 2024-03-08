// const sayHello = (name) => {
//   setTimeout(() => {
//     const text = `Selamat Siang ${name}, Apa kabar`;
//   });
// };

// const hasil = sayHello("Budi");

const sayHello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name !== "string") {
        return reject("Parameter harus string");
      }
      const text = `Selamat Siang ${name}, Apa kabar`;
      resolve(text);
    }, 2000);
  });
};

const startApp = async () => {
  try {
    const hasil = await sayHello("Alfred");
    console.log(hasil);
  } catch (error) {
    console.log(error);
  }
};

startApp();
