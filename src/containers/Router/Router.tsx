import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { News } from "@pages/News";

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<News />} />
    </Routes>
  </BrowserRouter>
);
