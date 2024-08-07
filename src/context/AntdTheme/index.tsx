import { ConfigProvider } from "antd";

const AntdThemeWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              fontWeight: 700,

              defaultBg: "var(--secondary-color)",
              defaultBorderColor: "transparent",
              defaultColor: "var(--primary-color)",
              defaultHoverBg: "var(--secondary-color)",
              defaultHoverColor: "var(--primary-color)",
              defaultActiveBg: "var(--secondary-color)",
              defaultActiveColor: "var(--primary-color)",
              defaultActiveBorderColor: "transparent",

              primaryColor: "var(--primary-color)",
              colorPrimary: "var(--secondary-color)",
              colorPrimaryHover: "var(--secondary-color)",
              colorPrimaryActive: "var(--secondary-color)",
              colorPrimaryBorder: "transparent",

              colorBorder: "transparent",

              controlHeightSM: 23,
              paddingBlockSM: 4,
              paddingInlineSM: 8,
              borderRadiusSM: 4,

              //   MD
              controlHeight: 40,
              paddingBlock: 16,
              paddingInline: 16,
              borderRadius: 8,

              //   Lg
              controlHeightLG: 56,
              paddingBlockLG: 24,
              paddingInlineLG: 8,
              borderRadiusLG: 16,
            },
            Tabs: {
              itemActiveColor: "var(--secondary-color)",
              inkBarColor: "var(--secondary-color)",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};

export default AntdThemeWrapper;
