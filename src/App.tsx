import { useEffect, useState } from "react";
import { App as AntdApp, Typography, Col, Collapse, Row } from "antd";
import { Layout, theme } from "antd";
const { Header, Content } = Layout;
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

import AgreementData from "./AgreementData";
import AgreementHtml from "./AgreementHtml";
import "./App.css";
import Errors from "./Errors";
import TemplateMarkdown from "./TemplateMarkdown";
import TemplateModel from "./TemplateModel";
import useAppStore from "./store";
import SampleDropdown from "./SampleDropdown";
import Links from "./Links";

function App() {
  const init = useAppStore((state) => state.init);
  const [activePanel, setActivePanel] = useState<string | string[]>();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (key: string | string[]) => {
    setActivePanel(key);
  };

  useEffect(() => {
    void init();
  }, [init]);

  const panels = [
    {
      key: "templateMark",
      label: "TemplateMark",
      children: <TemplateMarkdown />,
    },
    {
      key: "model",
      label: "Concerto Model",
      children: <TemplateModel />,
    },
    {
      key: "data",
      label: "Preview Data",
      children: <AgreementData />,
    },
  ];

  return (
    <AntdApp>
      <Layout>
        <Layout>
          {/* <Header
            style={{
              textAlign: "center",
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Typography.Title level={2} style={{ fontWeight: 700 }}>
              Template Playground{" "}
              <span style={{ fontSize: "80%", color: "#87CEEB" }}>(BETA)</span>
            </Typography.Title>
          </Header> */}
          <Menu
            fixed="top"
            inverted
            style={{ background: "#1b2540", height: "65px" }}
          >
            <Container>
              <Menu.Item as="a" header>
                <Image
                  size="small"
                  href="https://www.accordproject.org"
                  src="/logo.png"
                  style={{ marginRight: "1.5em" }}
                  target="_blank"
                />
                Project Name
              </Menu.Item>
              <Menu.Item as="a">Home</Menu.Item>

              <Dropdown item simple text="Dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Header Item</Dropdown.Header>
                  <Dropdown.Item>
                    <i className="dropdown icon" />
                    <span className="text">Submenu</span>
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Menu>
          <Content>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Row>
                <Col span={4}>
                  <SampleDropdown />
                </Col>
                <Col span={14}>
                  <Errors />
                </Col>
                <Col span={6}>
                  <Links />
                </Col>
              </Row>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                <Row gutter={24}>
                  <Col span={16}>
                    <Collapse
                      defaultActiveKey={activePanel}
                      onChange={onChange}
                      items={panels}
                    />
                  </Col>
                  <Col span={8}>
                    <AgreementHtml />
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </AntdApp>
  );
}

export default App;
