import React from "react";
const AboutUs = () => {
  return (
    <div className="container">
      <div className="data-item-1" style={{ width: "1140 px" }}>
        <div className="data-item-1__left-side">
          <h2 className="data-item-1__header">Welcome to Porto Medical</h2>
          <p className="data-item-1__desc-lg">
            Founded in 2001 by John Doe, gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
            nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat.
          </p>
          <p className="data-item-1__desc-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            hendrerit, leo vitae interdum pretium, tortor risus dapibus tortor,
            eu suscipit orci leo sed nisl. Integer et ipsum eu nulla auctor
            mattis sit amet in diam. Vestibulum non ornare arcu. ClassName
            aptent taciti sociosqu ad.
          </p>
          <p className="data-item-1__desc-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            hendrerit, leo vitae interdum pretium, tortor risus dapibus tortor,
            eu suscipit orci leo sed nisl. Integer et ipsum eu nulla auctor
            mattis sit amet in diam. Vestibulum non ornare arcu. ClassName
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Integer vitae nunc consequat, viverra nisl eget,
            dictum eros. Maecenas sit amet iaculis massa. Sed dui tellus,
            pellentesque non enim eget, cursus sollicitudin tellus. Cras eget
            varius enim. Aenean ac libero finibus, varius nisi a, cursus magna.
            Vestibulum vitae massa purus. Etiam vulputate ullamcorper diam, a
            iaculis nulla placerat a. Aenean ac libero finibus, varius nisi a,
            cursus magna. Vestibulum vitae massa purus. Etiam vulputate
            ullamcorper diam, a iaculis nulla placerat a.
          </p>
          <p className="data-item-1__desc-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            hendrerit, leo vitae interdum pretium, tortor risus dapibus tortor,
            eu suscipit orci leo sed nisl. Integer et ipsum eu nulla auctor
            mattis sit amet in diam. Vestibulum non ornare arcu. ClassName
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Integer vitae nunc consequat, viverra nisl eget,
            dictum eros. Maecenas sit amet iaculis massa. Sed dui tellus,
            pellentesque non enim eget, cursus sollicitudin tellus. Cras eget
            varius enim. Aenean ac libero finibus, varius nisi a, cursus magna.
            Vestibulum vitae massa purus. Etiam vulputate ullamcorper diam, a
            iaculis nulla placerat a. Aenean ac libero finibus, varius nisi a,
            cursus magna. Vestibulum vitae massa purus. Etiam vulputate
            ullamcorper diam, a iaculis nulla placerat a.
          </p>
        </div>
        <div className="data-item-1__right-side">
          <div className="slider">
            <div className="slider__indicators">
              <span className="slider__indicator"></span>
              <span className="slider__indicator"></span>
              <span className="slider__indicator"></span>
            </div>
          </div>
          <div className="data-item-1__countrers">
            <div className="counter">
              <h3 className="counter__header">15</h3>
              <span className="counter__data">Years in Business</span>
            </div>
            <div className="counter">
              <h3 className="counter__header">12</h3>
              <span className="counter__data">Departments</span>
            </div>
            <div className="counter">
              <h3 className="counter__header">16</h3>
              <span className="counter__data">Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
