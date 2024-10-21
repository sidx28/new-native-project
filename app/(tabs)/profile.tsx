import { AppState } from "@/components/store/reducers";
import React from "react";
import { connect } from "react-redux";

interface ProfilePropsType {}

const Profile: React.FC<ProfilePropsType> = (props) => {
  return <div>Profile</div>;
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
