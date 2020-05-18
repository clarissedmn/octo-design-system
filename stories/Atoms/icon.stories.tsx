import * as React from "react";
import Icon from "../../src/components/Icon";
import "../ds.style.scss";

export default {
  title: "⚛️Atoms|🔍 Icon",
  parameters: {
    info: { inline: true },
  },
};

export const AllIcons = () => (
  <div className="spacing">
    <Icon icon="validate" width={20} />
    <Icon icon="close" width={20} />
    <Icon icon="search" width={20} />
    <Icon icon="unfold" width={20} />
    <Icon icon="error" width={20} />
  </div>
);

export const Close = () => (
  <div className="spacing">
    <Icon icon="close" width={20} />
    <Icon icon="close" color="secondary" width={20} />
    <Icon className="background" icon="close" color="white" width={20} />
  </div>
);

export const Search = () => (
  <div className="spacing">
    <Icon icon="search" width={20} />
    <Icon icon="search" color="secondary" width={20} />
    <Icon className="background" icon="search" color="white" width={20} />
  </div>
);

export const Unfold = () => (
  <div className="spacing">
    <Icon icon="unfold" width={20} />
    <Icon icon="unfold" color="secondary" width={20} />
    <Icon className="background" icon="unfold" color="white" width={20} />
  </div>
);

export const Validate = () => (
  <>
    <Icon icon="validate" color="green" width={20} />
  </>
);

export const error = () => (
  <>
    <Icon icon="error" color="red" width={20} />
  </>
);
