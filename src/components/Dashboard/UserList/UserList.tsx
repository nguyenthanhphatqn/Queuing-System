import "../UserList/userlist.css";
import BellandUser from "../BellAndUser/BellAndUser";
import searchlogo from "../img/icon/icon-search.png";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import React, { useState, useEffect } from "react";
import addSquare from "../img/icon/icon-search.png";
import { connect } from "react-redux";
import prevArrow from "../img/icon/icon-previousarrow.png";
import nextArrow from "../img/icon/icon-nextarrow.png";
import ReactPaginate from "react-paginate";

// import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'

function UserList({ dataTableRedux, fetchDataChart }: any) {
  useEffect(() => {
    fetchDataChart();
  }, []);

  const options = ["Tất cả", "Kế toán", "Quản lý", "Admin"];

  const defaultOption = options[0];

  const handleDropdownValue = (e: any) => {
    console.log(e.value);
  };

  const [search, setSeatch] = useState("");

  const ServiceActivePoint = ({ value }: { value: any }) => {
    return (
      <>
        <span className="ActivePoint"></span>
        <span>{value}</span>
      </>
    );
  };

  const ServiceUnactivePoint = ({ value }: { value: any }) => {
    return (
      <>
        <span className="UnActivePoint"></span>
        <span>{value}</span>
      </>
    );
  };

  const dataUserList = dataTableRedux.dataUserList;

  const [data, setData] = useState(dataUserList);

  ////Pagination:

  const [pageNumber, setpageNumber] = useState(0);

  const dataPerPage = 9;

  const pagesVisited = pageNumber * dataPerPage;

  const dataBeforDisplay = data.slice(pagesVisited, pagesVisited + dataPerPage);

  const dataDisplay = dataBeforDisplay.map((item: any, index: any) => (
    <div className="ServiceTableDetailItem" key={index}>
      <div className="ServiceTableDetailTitles_Item">
        <span> {item.user}</span>
      </div>
      <div className="ServiceTableDetailTitles_Item">
        <span> {item.name}</span>
      </div>
      <div className="ServiceTableDetailTitles_Item">
        <span> {item.sdt}</span>
      </div>
      <div className="ServiceTableDetailTitles_Item">
        <span> {item.email}</span>
      </div>
      <div className="ServiceTableDetailTitles_Item">
        <span>{item.role} </span>
      </div>
      <div className="ServiceTableDetailTitles_Item">
        <span>
          {item.state == "Hoạt động" ? (
            <ServiceActivePoint value={"Hoạt động"} />
          ) : (
            <ServiceUnactivePoint value={"Ngưng hoạt động"} />
          )}
        </span>
      </div>
      <div className="ServiceTableDetailTitles_Item">
        <span>
          {" "}
          <Link to="/user-list/update-user">Cập nhật</Link>{" "}
        </span>
      </div>
    </div>
  ));

  const pageCount = Math.ceil(data.length / dataPerPage);

  const changePage = ({ selected }: any) => {
    setpageNumber(selected);
  };
  /////

  return (
    <div className="UserList">
      <div className="ServiceInfor">
        <div className="ServiceInforTitle">
          <span className="ServiceTItle">Cài đặt hệ thống</span>
          <span className="Servicepointer">{">"} </span>
          <span className="ListService">Quản lý tài khoản</span>
        </div>

        <div className="ServiceInforUser">
          <BellandUser />
        </div>
      </div>

      <div className="UserList__container">
        <div className="ServiceDropdownsSearchTItle">Danh sách tài khoản</div>

        <div className="ServiceDropdownsSarch">
          <div className="ServiceDropdownsItem1">
            <div className="ServiceDropdownsSarchFirst">
              <div className="ServiceDropdownsSarchFirstName">Tên vai trò</div>
              <div className="ServiceDropdowns_1">
                <Dropdown
                  options={options}
                  onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
            </div>
          </div>
          <div className="ServiceDropdownsSarchFirst  ServiceDropdownsSarchFirst_input">
            <div className="ServiceDropdownsSarchFirstName choseKey">
              Từ khóa
            </div>
            <div className="ServiceDropdowns_input">
              <input
                placeholder="Nhập từ khóa"
                value={search}
                onChange={(e) => setSeatch(e.target.value)}
              />
              <div className="seacrchlogo">
                <img src={searchlogo} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="ServiceTableDetail">
          <div className="ServiceTableDetailTitles">
            <div className="ServiceTableDetailTitles_Item">
              <span> Tên đăng nhập </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Họ tên </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Số điện thoại</span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Email</span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Vai trò </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> Trạng thái hoạt động </span>
            </div>
            <div className="ServiceTableDetailTitles_Item">
              <span> </span>
            </div>
          </div>

          {dataDisplay}
        </div>
      </div>

      <Link to="/user-list/add-user">
        {" "}
        <div className="ServiceAdd">
          <div className="ServiceAddIMG">
            <img src={addSquare} alt="" />
          </div>
          <span>Thêm tài khoản</span>
        </div>
      </Link>

      <div className="Pagination">
        <ReactPaginate
          previousLabel={
            <div className="ChosePage__preArrow">
              <img src={prevArrow} alt="" />
            </div>
          }
          nextLabel={
            <div className="ChosePage__preArrow">
              <img src={nextArrow} alt="" />
            </div>
          }
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    dataTableRedux: state.dataAlta,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // fetchDataChart: ()=>  dispatch(fetchDataChart()),
    fetchDataChart: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
