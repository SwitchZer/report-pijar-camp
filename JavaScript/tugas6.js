async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      const title = data[i].title;
      console.log(title);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function generateId(length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof length !== "number") {
        reject(new Error("Parameter harus berupa angka"));
      } else {
        let id = "";
        for (let i = 0; i < length; i++) {
          id += Math.floor(Math.random() * 10);
        }
        resolve(id);
      }
    }, 2000);
  });
}

async function generateDanPrintId(length) {
  try {
    const id = await generateId(length);
    console.log(id);
  } catch (error) {
    console.log(error.message);
  }
}

generateDanPrintId(5);
generateDanPrintId(11);
generateDanPrintId("dua");
