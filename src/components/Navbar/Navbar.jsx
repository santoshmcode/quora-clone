import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar, Button, Input, FormHelperText } from "@mui/material";
// import Modal from "react-modal";
import { ExpandMore } from "@mui/icons-material";
import "./navbar.css";
// import { Topic } from "./Topic";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import { NavLink, useLocation, Link } from "react-router-dom";
import { auth } from "../../config/firebase.config";
// import { Dropdown } from "./Dropdown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import { Logout, ContentCopy } from "@mui/icons-material";
// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { postData } from "../../utils/api/postData";
import { Search } from "./search/Search";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Navbar = () => {
  // const [IsmodalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [input2, setinput2] = useState(false);
  const [que, setQue] = useState(false);
  const [question, setQuestion] = useState(""); //state for finally added question
  const [tag, setTag] = useState([]); // state for all the topics{tags} that are finally added
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");
  // const [profile,setProfile]=useState(false);

  const handleQuestion = (e) => {
    if (input === "") {
      handleClick2();
      return;
    }
    setQuestion(input);
    setQue(true);
    setTopic([]);
  };

  //for topic section
  const [value, setValue] = React.useState("");
  const [topic, setTopic] = React.useState([]);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setQue(false);
    setValue("");
    setInput("");
    setTopic([]);
    setinput2(false);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Adding question to the database

  const handleTopic = () => {
    if (topic.length === 0) {
      setinput2(true);
      handleClick3();
      return;
    }

    setTag(topic);

    postData("questions/", {
      question: question,
      tags: topic.map((el) => el.value),
      created_at: Date.now(),
      admin_name: user.displayName || null,
      admin_email: user.email || null,
      admin_img: user.photoURL || null,
      q_user_id: user.uid,
      isAnswered: false,
    });
    setQue(false);
    setValue("");
    setInput("");
    setTopic([]);
    handleClose();
  };
  const handleDelete = (e) => {
    let updatedtopic = topic.filter((item) => item.id !== e);
    setTopic(updatedtopic);
  };
  React.useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        // callMyFunction();
        const data = { value: value, id: uuid() };
        setTopic([data, ...topic]);
        setValue("");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [topic, value]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  // for profile menu section
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  ///for pop up alert

  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };

  //for topic alert
  const handleClick3 = () => {
    setOpen3(true);
  };

  const handleClose3 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen3(false);
  };

  return (
    <div className="Nav">
      <div className="qNav">
        <Link to="/home">
          <div className="qNav_logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
              alt=""
            />
          </div>
        </Link>
        <div className="qNav_icons">
          <NavLink
            to="/home"
            className={(isActive) => "nav-link" + (isActive ? " selected" : "")}
          >
            <div className="qNav_icon">
              <div className="svgIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <g class="icon_svg-fill_as_stroke">
                    <path
                      d="M0.308058262,12.0580583 L0.245478344,12.130247 C-0.051901591,12.5286585 0.225938323,13.125 0.75,13.125 L3.875,13.125 L3.875,22.5 C3.875,22.845178 4.15482203,23.125 4.5,23.125 L9.5,23.125 C9.84517797,23.125 10.125,22.845178 10.125,22.5 L10.125,17.5 C10.125,16.4644661 10.9644661,15.625 12,15.625 C13.0355339,15.625 13.875,16.4644661 13.875,17.5 L13.875,22.5 C13.875,22.845178 14.154822,23.125 14.5,23.125 L19.5,23.125 L19.5923579,23.1182234 C19.8937421,23.0735831 20.125,22.8137982 20.125,22.5 L20.125,13.125 L23.25,13.125 C23.8068155,13.125 24.0856698,12.4517863 23.6919417,12.0580583 L12.4419417,0.808058262 C12.1978641,0.563980579 11.8021359,0.563980579 11.5580583,0.808058262 L0.308058262,12.0580583 Z M12,2.133 L21.742,11.875 L19.5,11.875 L19.4076421,11.8817766 C19.1062579,11.9264169 18.875,12.1862018 18.875,12.5 L18.875,21.875 L15.125,21.875 L15.125,17.5 C15.125,15.7741102 13.7258898,14.375 12,14.375 L11.8226693,14.3799469 C10.1792834,14.4718789 8.875,15.8336236 8.875,17.5 L8.875,21.875 L5.125,21.875 L5.125,12.5 L5.1182234,12.4076421 C5.07358314,12.1062579 4.81379815,11.875 4.5,11.875 L2.257,11.875 L12,2.133 Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </NavLink>

          <div className="qNav_icon">
            <div className="svgIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  stroke="#666"
                  class="icon_svg-fill_as_stroke"
                  fill="transparent"
                  fill-rule="nonzero"
                >
                  <path d="M20.269,0.927H3.731c-1.547,0-2.805,1.258-2.805,2.805v16.537c0,1.547,1.258,2.805,2.805,2.805h16.537 c1.547,0,2.805-1.258,2.805-2.805V3.731C23.073,2.185,21.815,0.927,20.269,0.927z M6.71,4.127c1.051,0,1.905,0.854,1.905,1.905 S7.761,7.938,6.71,7.938S4.805,7.083,4.805,6.032S5.659,4.127,6.71,4.127z M8.535,19.6H4.886V15.95h3.649V19.6z M8.384,13.449 H5.036c-0.271,0-0.44-0.293-0.304-0.527l1.674-2.9c0.135-0.234,0.474-0.234,0.609,0l1.674,2.9 C8.824,13.156,8.655,13.449,8.384,13.449z M19.456,19.155h-7.204c-0.331,0-0.6-0.269-0.6-0.6s0.269-0.6,0.6-0.6h7.204 c0.331,0,0.6,0.269,0.6,0.6S19.787,19.155,19.456,19.155z M19.456,14.892h-7.204c-0.331,0-0.6-0.269-0.6-0.6s0.269-0.6,0.6-0.6 h7.204c0.331,0,0.6,0.269,0.6,0.6S19.787,14.892,19.456,14.892z M19.456,10.627h-7.204c-0.331,0-0.6-0.269-0.6-0.6 s0.269-0.6,0.6-0.6h7.204c0.331,0,0.6,0.269,0.6,0.6S19.787,10.627,19.456,10.627z M19.456,6.363h-7.204 c-0.331,0-0.6-0.269-0.6-0.6s0.269-0.6,0.6-0.6h7.204c0.331,0,0.6,0.269,0.6,0.6S19.787,6.363,19.456,6.363z" />
                </g>
              </svg>
            </div>
          </div>
          <NavLink
            to="/answers"
            className={(isActive) => "nav-link" + (isActive ? " selected" : "")}
          >
            <div className="qNav_icon">
              <div className="svgIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="icon_svg-fill_as_stroke"
                    d="M20.582 1.469c.951.255 1.694.998 1.949 1.949.238.888.017 1.831-.58 2.519l-.134.143L7.594 20.299c-.039.039-.082.072-.129.099l-.073.036-1.238.514.006.006-.1.033-3.82 1.59c-.247.103-.495.037-.662-.116l-.058.019.019-.058c-.134-.146-.201-.354-.147-.569l.031-.093 1.592-3.831.031-.089.005.005.515-1.237c.021-.05.048-.098.081-.141l.054-.061L17.92 2.182c.696-.696 1.711-.968 2.662-.713zm.918 8.406c.314 0 .574.231.618.533l.007.092v11c0 .314-.231.574-.533.618l-.092.007h-11c-.345 0-.625-.28-.625-.625 0-.314.231-.574.533-.618l.092-.007h10.375V10.5c0-.314.231-.574.533-.618l.092-.007zm-2.577-6.916l-.119.107L4.673 17.201l-.666 1.6 1.19 1.19 1.601-.665 14.136-14.13c.304-.304.46-.72.439-1.14l-.016-.158-.033-.157c-.139-.52-.545-.926-1.065-1.065-.468-.125-.964-.018-1.335.283zM13.5 1.875c.345 0 .625.28.625.625 0 .314-.231.574-.533.618l-.092.007H3.124L3.125 13.5c0 .314-.231.574-.533.618l-.092.007c-.314 0-.574-.231-.618-.533l-.007-.092v-11c0-.314.231-.574.533-.618l.092-.007h11z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </NavLink>
          <div className="qNav_icon">
            <div className="svgIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  class="icon_svg-fill_as_stroke"
                  d="M12 11.375c2.276 0 4.125 1.823 4.125 4.076h0V22.5c0 .345-.28.625-.625.625h0-7c-.345 0-.625-.28-.625-.625h0v-7.049c0-2.253 1.849-4.076 4.125-4.076zm-7-2c1.376 0 2.638.671 3.403 1.771.197.283.127.673-.157.87s-.673.127-.87-.157c-.533-.767-1.413-1.235-2.376-1.235-1.533 0-2.783 1.178-2.87 2.66l-.005.166-.001 8.424h4.127c.314 0 .574.231.618.533l.007.092c0 .314-.231.574-.533.618l-.092.007H1.5c-.314 0-.574-.231-.618-.533L.875 22.5v-9.049c0-2.253 1.849-4.076 4.125-4.076zm14.001 0c2.276 0 4.125 1.823 4.125 4.076h0V22.5l-.007.092c-.045.301-.304.533-.618.533h0-4.751l-.092-.007c-.301-.045-.533-.304-.533-.618h0l.007-.092c.045-.301.304-.533.618-.533h0 4.126v-8.424l-.005-.166c-.087-1.482-1.337-2.66-2.87-2.66-.963 0-1.844.468-2.377 1.235-.197.284-.586.354-.87.157s-.354-.586-.157-.87c.764-1.101 2.027-1.772 3.403-1.772zM12 12.625c-1.59 0-2.875 1.267-2.875 2.826h0v6.424h5.75v-6.424c0-1.503-1.195-2.735-2.706-2.821h0zm0-10a3.86 3.86 0 0 1 2.641 1.039c.743.652 1.234 1.541 1.234 2.461h0v.625A3.89 3.89 0 0 1 12 10.375c-2.056 0-3.738-1.601-3.867-3.624l-.008-.001v-.625c0-.919.491-1.809 1.234-2.461.692-.645 1.621-1.039 2.641-1.039zm2.613 4.126H9.387C9.513 8.083 10.635 9.125 12 9.125s2.487-1.042 2.613-2.374zM19.192.625h.126.032 0l.082.003.073.004.048.003.111.011.033.004-.144-.015c1.626.128 2.998 1.259 3.432 2.831a3.87 3.87 0 0 1 .135 1.237l-.002 2.176.022.188.025.152.012.06.059.012c.376.096.655.549.392.947h0l-.056.074a2.34 2.34 0 0 1-.429.381c-.848.596-1.86.578-2.695-.443l-.042-.053a3.87 3.87 0 0 1-3.362-.512c-.284-.197-.355-.586-.158-.87s.586-.355.87-.158c.798.552 1.824.614 2.672.188.639-.453.834-1.328.415-2.046-.049-.097-.196-.263-.419-.458a7.85 7.85 0 0 0-.569-.448l-.819-.549h0l-.042-.027-1.875 1.237c-.277.183-.643.115-.839-.14h0l-.053-.082-.452-.823a.63.63 0 0 1-.108-.321v-.02c-.003-.096.015-.193.056-.282.511-1.115 1.499-1.889 2.632-2.157l.042-.009.151-.032.03-.005.353-.046.06-.004.147-.007zm-14.505 0h.093l.103.002.086.004.118.008.104.01.072.009.123.019.082.014.07.014.314.079.042.013a3.85 3.85 0 0 1 .666.275c.148.079.292.167.429.264a3.86 3.86 0 0 1 .649.578l.113.132c.102.125.195.254.28.39l.057.094.005.009a3.89 3.89 0 0 1 .186.359c.023.052.039.105.048.158.05.216.042.44-.018.634-.134.503-.531.948-1.088.948-.372 0-.678-.203-1.034-.56l-.354-.392h0l-.158-.198-.309.253c-.297.23-.612.446-.949.649h0l-.344.198c-.602.254-1.235.419-1.882.491a2.62 2.62 0 0 0 1.04 1.56c.901.639 2.106.647 3.014.018.284-.197.673-.126.87.158s.126.673-.158.87c-1.341.928-3.119.918-4.449-.026C1.384 6.862.784 5.543.886 4.205a3.86 3.86 0 0 1 .248-1.099l.026-.064.047-.112.04-.087.023-.049.036-.072.025-.048.057-.103.03-.052.064-.104.048-.074.062-.09.054-.074.056-.073.07-.087.054-.063.063-.071.068-.072.069-.07.069-.066.063-.058.097-.084.047-.039.086-.068.074-.056.091-.065.066-.044.099-.063.063-.038.103-.059.072-.038.087-.044.095-.045.089-.039.094-.039.072-.028.116-.041.062-.02.151-.045.2-.049-.189.046.18-.044.027-.006.152-.029.082-.013.113-.015.067-.007.09-.008.058-.004.048-.003.096-.004h0z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <NavLink
            to="/notifications"
            className={(isActive) => "nav-link" + (isActive ? " selected" : "")}
          >
            <div className="qNav_icon">
              <div className="svgIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="icon_svg-fill_as_stroke"
                    d="M7.526 20.785H2.79c-.345 0-.625-.28-.625-.625v-2.87c0-.283.19-.53.463-.604.907-.244 1.672-.856 2.093-1.655.207-.456.349-1.126.426-1.944.079-.839.083-1.741.044-2.578l-.025-.44a6.84 6.84 0 0 1 4.402-6.386 2.54 2.54 0 0 1 4.133-2.658 2.54 2.54 0 0 1 .692 2.678c2.547.998 4.346 3.485 4.346 6.415l-.022.381a19.11 19.11 0 0 0 .046 2.585c.076.811.214 1.476.415 1.932.437.813 1.188 1.412 2.079 1.657.271.075.459.321.459.603v2.885c0 .345-.28.625-.625.625h-4.616a4.93 4.93 0 0 1-8.948 0zm1.432 0a3.68 3.68 0 0 0 6.084 0H8.958zm-1.155-1.25a.62.62 0 0 1 .273 0h7.847a.62.62 0 0 1 .273 0h4.269v-1.81c-1.027-.402-1.882-1.159-2.402-2.143l-.018-.037c-.272-.605-.439-1.399-.527-2.346-.085-.909-.091-1.868-.05-2.758l.022-.371c-.002-2.611-1.796-4.809-4.219-5.418-.421-.101-.851-.158-1.271-.167h-.089c-.436.015-.869.078-1.291.186-.04.01-.08.016-.12.019-2.358.657-4.083 2.813-4.087 5.331l.026.43c.042.89.037 1.847-.048 2.754-.089.945-.257 1.738-.548 2.377-.524.995-1.389 1.761-2.428 2.161v1.793h4.389zm2.969-16.189c.359-.066.727-.103 1.104-.111h.023.11c.402.006.796.048 1.178.121a1.29 1.29 0 0 0-2.078-1.409 1.29 1.29 0 0 0-.337 1.4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <div className="qNav_input">
            <div className="svgIcon">
              <SearchIcon />
            </div>
            <input
              className="NavSearch"
              type="text"
              placeholder="Search Quora"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Search handleOpen={handleOpen} setSearch={setSearch} search={search} />
          </div>
        </div>
        <div className="qNav_Rem">
          <div className="qNav_avatar" onClick={handleClick1}>
            <Avatar
              className="Avatar"
              sx={{ width: 24, height: 24 }}
              src={
                user
                  ? user.photoURL
                  : "https://qsfs.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
              }
            />
            {/* onClick={() => auth.signOut()} */}
          </div>

          <Menu
            anchorEl={anchorEl1}
            open={open1}
            onClose={handleClose1}
            onClick={handleClose1}
            PaperProps={{
              elevation: 0,
              sx: {
                width: 228,
                maxWidth: "100%",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 2.7,
                ml: 12,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 102,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{
              horizontal: "right",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: "right",
              vertical: "bottom",
            }}
          >
            {/* <Paper sx={{ width: 228, maxWidth: '100%' }}  anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        onClick={handleClose1}> */}

            <Avatar
              style={{ marginLeft: "20px" }}
              src={
                user
                  ? user.photoURL
                  : "https://qsfs.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
              }
            />

            <MenuItem>
              <div className="text-menu-name">
                <div>{user?.displayName}</div>
                <div>
                  <svg width="24px" height="24px" viewBox="0 0 24 24">
                    <g
                      id="chevron_right"
                      class="icon_svg-stroke"
                      stroke="#666"
                      stroke-width="1.5"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                    >
                      <polyline
                        id="chevron"
                        transform="translate(12.500000, 12.002415) scale(1, -1) rotate(-90.000000) translate(-12.500000, -12.002415) "
                        points="5.49758463 8.50241537 12.4975846 15.5024154 19.5024154 8.50241537"
                      ></polyline>
                    </g>
                  </svg>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M7 4.5h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3l-3.5 4v-4H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Zm13 8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2l-2-2h-2"
                      class="icon_svg-stroke"
                      stroke-width="1.5"
                      stroke="#666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <g class="icon_svg-fill_as_stroke" fill="#666">
                      <circle cx="8" cy="10.5" r="1"></circle>
                      <circle cx="11" cy="10.5" r="1"></circle>
                      <circle cx="14" cy="10.5" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </ListItemIcon>
              <Link to='/chat'><div className="text-menu"> Messages</div></Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M3 9.5 17 5v12L3 12.5v-3Zm4.853 4.56L9.5 19H7l-1.947-5.84 2.8.9ZM19.5 7.5l2-1-2 1Zm0 3.5H22h-2.5Zm0 3.5 2 1-2-1ZM8 10.4l6-1.9-6 1.9Z"
                    class="icon_svg-stroke"
                    stroke="#666"
                    stroke-width="1.5"
                    fill="none"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </ListItemIcon>
              <div className="text-menu"> Create Ad</div>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M11.5 4v16m3.75-13H9.625C8.175 7 7 8.12 7 9.5S8.175 12 9.625 12h3.75C14.825 12 16 13.12 16 14.5S14.825 17 13.375 17H7"
                    class="icon_svg-stroke"
                    stroke="#666"
                    stroke-width="1.5"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </ListItemIcon>
              <div className="text-menu"> Monetization</div>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M5 12h3v8H5v-8Zm5.5-8h3v16h-3V4ZM16 7h3v13h-3V7Z"
                    class="icon_svg-stroke icon_svg-fill"
                    stroke-width="1.5"
                    stroke="#666"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </ListItemIcon>
              <div className="text-menu"> Your Content {"&"} stats</div>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g
                    class="icon_svg-stroke"
                    stroke-width="1.5"
                    stroke="#666"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      class="icon_svg-fill"
                      d="m10.501 16-5.499 4L5 8h11v12z"
                    ></path>
                    <path d="M8 5.923V5h11v12l-.997-.725"></path>
                  </g>
                </svg>
              </ListItemIcon>
              <div className="text-menu"> Bookmarks</div>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M20.743 10.757h0a1.5 1.5 0 0 1 0 2.122l-5.728 5.727-2.756.638.635-2.76 5.727-5.727a1.5 1.5 0 0 1 2.122 0Zm-3.182 1.061 2.121 2.121M9 19H5V5h13v3M8 9h7m-7 3h5.5M8 15h2.5"
                    class="icon_svg-stroke"
                    stroke-width="1.5"
                    stroke="#666"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </ListItemIcon>
              <div className="text-menu"> Drafts</div>
            </MenuItem>
            <Divider />
            <MenuItem sx={{ height: 30, fontSize: "5", width: "100%" }}>
              <div className="sub-flex">
                <div className="text-sub-menu "> Dark mode</div>
                <Typography
                  className="darkmode"
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "xx-small" }}
                >
                  OFF
                </Typography>
              </div>
            </MenuItem>
            <MenuItem sx={{ height: 30, fontSize: "5" }}>
              <div className="text-sub-menu "> Settings</div>
            </MenuItem>
            <MenuItem sx={{ height: 30, fontSize: "5" }}>
              <div className="text-sub-menu ">Languages</div>
            </MenuItem>
            <MenuItem sx={{ height: 30, fontSize: "5" }}>
              <div className="text-sub-menu "> Help</div>
            </MenuItem>
            <MenuItem
              onClick={() => auth.signOut()}
              sx={{ height: 30, fontSize: "5" }}
            >
              <div className="text-sub-menu "> Logout</div>
            </MenuItem>
          </Menu>

          <div className="svgIcon">
            <LanguageIcon sx={{ width: 26, height: 26 }} />
          </div>
          <Button
            sx={{
              width: "115px",
              height: "30px",
              fontSize: "13px",
              fontWeight: "500",
            }}
            onClick={handleOpen}
          >
            Add question
          </Button>

          <div>
            {open2 ? (
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open2}
                autoHideDuration={6000}
                onClose={handleClose2}
              >
                <Alert
                  onClose={handleClose2}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  This question needs more detail. Add more information to ask a
                  clear question, written as a complete sentence..
                </Alert>
              </Snackbar>
            ) : (
              ""
            )}

            {input2 && topic.length === 0 ? (
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open3}
                autoHideDuration={6000}
                onClose={handleClose3}
              >
                <Alert
                  onClose={handleClose3}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  Please add at least one topic.{" "}
                </Alert>
              </Snackbar>
            ) : (
              ""
            )}
            <Modal
              open={open}
              onClose={handleClose}
              className="modal"
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="closeIcon" onClick={() => handleClose()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="close"
                      class="icon_svg-stroke"
                      stroke="#666"
                      stroke-width="1.5"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                    >
                      <path d="M5.5,5.5 L18.5,18.5" />
                      <path d="M5.5,18.5 L18.5,5.5" />
                    </g>
                  </svg>
                </div>
                {!que ? (
                  <>
                    <div className="modal__title">
                      <div className="add_btn">
                        {" "}
                        <p>Add question </p>
                        <ExpandMore />
                      </div>
                    </div>
                    <div className="modal__info">
                      <Avatar
                        sx={{ width: 24, height: 24 }}
                        className="avatar"
                        src={
                          user
                            ? user.photoURL
                            : "https://qsfs.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
                        }
                      />
                      <p>{user?.displayName} asked</p>
                      <div className="modal__scope">
                        <svg width="24px" height="24px" viewBox="0 0 24 24">
                          <g stroke="none" fill="none" fill-rule="evenodd">
                            <g
                              class="icon_svg-stroke"
                              transform="translate(4.000000, 4.000000)"
                              stroke="#666666"
                              stroke-width="1.5"
                            >
                              <path d="M10,15.5 C10,12.7385763 7.76142375,10.5 5,10.5 C2.23857625,10.5 0,12.7385763 0,15.5"></path>
                              <path d="M17,15.5 C17,12.7385763 14.7614237,10.5 12,10.5 C11.2764674,10.5 10.588829,10.6536817 9.96794692,10.930183"></path>
                              <circle cx="5" cy="4" r="4"></circle>
                              <path d="M9.67845014,7.25774619 C10.3330402,7.72505997 11.1344123,8 12,8 C14.209139,8 16,6.209139 16,4 C16,1.790861 14.209139,0 12,0 C11.183578,0 10.424284,0.24459363 9.79139875,0.664499992"></path>
                            </g>
                          </g>
                        </svg>
                        <p>Public</p>
                        <ExpandMore />
                      </div>
                    </div>
                    <div className="modal__Field">
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Start your question with 'What', 'How', 'Why', etc. "
                      />
                    </div>

                    <div className="modal__buttons">
                      <br />
                      <button
                        className="cancle"
                        onClick={() => {
                          handleClose();
                          setInput("");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="sumbit"
                        className="add"
                        onClick={handleQuestion}
                      >
                        Add Question
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <h3>Edit Topics</h3>
                    <div>
                      Make sure this question has the right topics:
                      <br />
                      <span className="question">{question}</span>
                    </div>

                    <div className="qNav_input input2">
                      <div className="svgIcon">
                        <SearchIcon />
                      </div>
                      <input
                        type="text"
                        className="placeholder"
                        value={value}
                        onChange={handleChange}
                        placeholder="Add topics that best describe your question "
                      />
                    </div>

                    {topic.map((e) => {
                      return (
                        <div className="topics" key={e.id}>
                          <div>{e.value} </div>
                          <div className="topic_close">
                            <svg
                              marginLeft="15px"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 -3 25 25"
                              onClick={() => handleDelete(e.id)}
                            >
                              <g
                                id="small_close"
                                class="icon_svg-stroke"
                                fill="none"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke="#666666"
                                stroke-width="1.5"
                              >
                                <path
                                  d="M12,6 L12,18"
                                  transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                />
                                <path
                                  d="M18,12 L6,12"
                                  transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                    <div className="modal__buttons">
                      <br />
                      <button className="cancle" onClick={() => handleClose()}>
                        Cancel
                      </button>
                      <button
                        type="sumbit"
                        className="add"
                        onClick={handleTopic}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </Box>
            </Modal>
          </div>
          {/* </Modal> */}
        </div>
      </div>
    </div>
  );
};
