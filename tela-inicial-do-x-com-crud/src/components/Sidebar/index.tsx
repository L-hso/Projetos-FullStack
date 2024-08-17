import "./sidebar.scss";

import { Bell, Bookmark, CircleEllipsis, FileText, Hash,  Mail , User2 } from "lucide-react";
import { GoHomeFill } from "react-icons/go";
import { FaTwitter } from "react-icons/fa6";

export function Sidebar() {
  return (
    <aside id="sidebar">
      <i><FaTwitter color="#1da1f2" fill="#1da1f2" size="30"/></i>
      <menu>
        <li><GoHomeFill color="#1da1f2" fill="#1da1f2" size="24"/>Home</li>
        <li><Hash/>Explore</li>
        <li><Bell/>Notifications</li>
        <li><Mail/>Message</li>
        <li><Bookmark/>Bookmarks</li>
        <li><FileText/>Lists</li>
        <li><User2/>Profile</li>
        <li><CircleEllipsis/>More</li>
      </menu>
      <button>Tweet</button>
    </aside>
  );
}
