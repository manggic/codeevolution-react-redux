import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
import { useEffect } from "react";

const UserContainer = ({ state, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const { users = [] } = state.user || {};

  return (
    <>
      <div>
        {users.map((ele) => {
          return <div key={ele.id}>{ele.name}</div>;
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
