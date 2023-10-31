import Slider from "@react-native-community/slider";
import { useState } from "react";
import Modal from "~/components/Modal";

import S from "./styles";

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

export default function App() {
  const [size, setSize] = useState(6);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    let passwordGenerate = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      passwordGenerate += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(passwordGenerate);
  };

  return (
    <S.Container>
      <S.Image source={require("../../assets/logo.png")} />

      <S.Title>{size} Caracteres</S.Title>

      <S.Area>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ccc"
          minimumTrackTintColor="#392DE9"
          thumbTintColor="#f39c37"
          value={size}
          onValueChange={(e) => setSize(Number(e.toFixed(0)))}
        />
      </S.Area>

      <S.Button onPress={handleGeneratePassword}>
        <S.TitleButton>Gerar senha</S.TitleButton>
      </S.Button>

      <Modal value={password} />
    </S.Container>
  );
}
