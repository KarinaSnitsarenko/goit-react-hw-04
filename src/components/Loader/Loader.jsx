import { Vortex } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Loader;
