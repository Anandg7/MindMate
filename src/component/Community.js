import { Routes, Route, Navigate } from "react-router-dom";
import NestedComments from "../pages/CommentsPage";
import Tabs from "../pages/TabsPage";
import Modal from "../pages/ModalPage";

export default function Community() {
  return (
    <div className="container">
      <Routes>
        <Route index element={<Navigate replace to="nested-comments" />} />
        <Route path="/nested-comments" element={<NestedComments />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/nested" element={<Modal />} />
      </Routes>
    </div>
  );
}
