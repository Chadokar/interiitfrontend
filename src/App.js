import axios from "axios";
import { useState } from "react";
import "./App.css";
import "./button.css";
import "./font.css";

function App() {
  const [file, setFile] = useState(
    "https://assets.puzzlefactory.pl/puzzle/386/275/original.jpg"
  );

  const [datas, setDatas] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
    uploadImage();
  }

  const uploadImage = async () => {
    console.log("entered");
    var data = new FormData();
    data.append("file", file);
    console.log(data);
    try {
      await axios.post("http://54.241.135.181/upload", data).then((res) => {
        console.log(res);
        setDatas(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`w-full gap-20 flex flex-col container-box items-center min-h-screen`}
      >
        <form action="" className={`App`} onSubmit={uploadImage}>
          <label htmlFor="Image" className="input-img">
            {file !==
              "https://assets.puzzlefactory.pl/puzzle/386/275/original.jpg" && (
              <img
                src={URL.createObjectURL(file)}
                style={{ maxWidth: 480, maxHeight: 500 }}
                alt=" "
              />
            )}
            {file ===
              "https://assets.puzzlefactory.pl/puzzle/386/275/original.jpg" && (
              <img
                src={require("./undraw_Image_upload_re_w7pm.png")}
                alt=" "
                className="image"
              />
            )}
            <div
              className={`${Button.button} ${Button.secondary} ${Button.medium}`}
            >
              <h1 className={`${Font.font} ${Font.body2} ${Font.medium}`}>
                Upload Image
              </h1>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15"
                  stroke="#101828"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input type="file" name="" id="Image" onChange={handleChange} />
          </label>
          {/* {file !==
            "https://assets.puzzlefactory.pl/puzzle/386/275/original.jpg" && (
            <div className="see-result">
              <button>See result!</button>
            </div>
          )} */}
        </form>
        <div className="flex-col flex items-center gap-10 w-4/5">
          <div className="flex flex-row gap-14 justify-between">
            {datas && (
              <img
                src={`http://54.241.135.181${datas.output1}`}
                style={{ maxWidth: 480, maxHeight: 500 }}
                alt=" "
              />
            )}
            {datas && (
              <img
                src={`http://54.241.135.181${datas.output2}`}
                style={{ maxWidth: 480, maxHeight: 500 }}
                alt=" "
              />
            )}
          </div>
          {datas && (
            <div className="flex-row flex gap-10 items-center">
              <div className="flex flex-col gap-3 items-center">
                <p className="numb">{datas.val1}</p>
                <h2 className="numt">First Number</h2>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <p className="numb">{datas.val2}</p>
                <h2 className="numt">Second Number</h2>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <p className="numb">{datas.val3}</p>
                <h2 className="numt">Third Number</h2>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <p className="numb">{datas.val4}</p>
                <h2 className="numt">Fourth Number</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const Button = {
  button: "button",
  large: "large",
  medium: "medium",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  disable: "disable",
  iconlarge: "iconlarge",
  iconmedium: "iconmedium",
};

export const Font = {
  components: "components",
  font: "font",
  bold: "bold",
  medium: "medium",
  regular: "regular",
  display: "display",
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
  subheadline: "subheadline",
  body1: "body1",
  body2: "body2",
  label: "caption",
};

export default App;
