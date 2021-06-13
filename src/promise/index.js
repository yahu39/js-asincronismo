const somethingWIllHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey! lo hicimos");
    } else {
      reject("Upssss!");
    }
  });
};

somethingWIllHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWIllHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Upss");
      reject(error);
    }
  });
};

somethingWIllHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWIllHappen(), somethingWIllHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.log(err);
  });
