import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function NavBar() {
  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "",
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>Logo</h2>

      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          minWidth: 0,
        }}
      />
    </Header>
  );
}
