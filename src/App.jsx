// First, install Ant Design in your project:
// npm install antd @ant-design/icons

// App.js
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Table,
  Modal,
  Card,
  Tabs,
  message,
  Upload,
  Drawer,
  Space,
  Typography,
} from "antd";
import {
  UserOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Sample data for table
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      age: 32,
      address: "New York",
    },
    {
      key: "2",
      name: "Jane Smith",
      age: 28,
      address: "Los Angeles",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  // Form handling
  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Form submitted successfully!");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "3",
              icon: <SettingOutlined />,
              label: "Settings",
            },
          ]}
        />
      </Sider>

      <Layout>
        {/* Header */}
        <Header style={{ padding: 0, background: "#fff" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>

        {/* Main Content */}
        <Content
          style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
        >
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            {/* Typography */}
            <div>
              <Title level={2}>Ant Design Components Demo</Title>
              <Text>
                This is a comprehensive demo of various Ant Design components.
              </Text>
            </div>

            {/* Cards Section */}
            <div style={{ display: "flex", gap: "16px" }}>
              <Card title="Basic Card" style={{ width: 300 }}>
                <p>Card content</p>
                <Button type="primary">Action</Button>
              </Card>

              <Card title="With Tabs" style={{ width: 300 }}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                  </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                  </TabPane>
                </Tabs>
              </Card>
            </div>

            {/* Form Section */}
            <Card title="Form Components">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item label="Select" name="select">
                  <Select placeholder="Select an option">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="DatePicker" name="date">
                  <DatePicker />
                </Form.Item>

                <Form.Item label="Upload" name="upload">
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            {/* Table Section */}
            <Card title="Table Component">
              <Table dataSource={dataSource} columns={columns} />
            </Card>

            {/* Buttons Section */}
            <Card title="Buttons">
              <Space>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
                <Button type="primary" onClick={() => setIsModalVisible(true)}>
                  Open Modal
                </Button>
                <Button onClick={() => setIsDrawerVisible(true)}>
                  Open Drawer
                </Button>
              </Space>
            </Card>

            {/* Modal */}
            <Modal
              title="Basic Modal"
              open={isModalVisible}
              onOk={() => setIsModalVisible(false)}
              onCancel={() => setIsModalVisible(false)}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>

            {/* Drawer */}
            <Drawer
              title="Basic Drawer"
              placement="right"
              onClose={() => setIsDrawerVisible(false)}
              open={isDrawerVisible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
