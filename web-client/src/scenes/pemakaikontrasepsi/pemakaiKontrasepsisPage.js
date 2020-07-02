import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import styles from './styles.js';
import { deleteById, findAll } from '../../actions/stocks';
import { Button, Tooltip } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connect } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import { CircularProgress } from '@material-ui/core';
import {
  Cached as ReloadIcon,
} from '@material-ui/icons';
import Backdrop from '@material-ui/core/Backdrop';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';


class StocksPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      params: {
        sort: 'asc',
        page: 0,
        size: 10,
      },
      error: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAll(this.state.params);
  }

  componentDidUpdate(prevProps, prevState) {
    const { deleteData, deleteError, data, error } = this.props;
    const { params } = this.state;

    if (prevProps.data !== data) {
      this.setState({ data: data.list, total: data.total });
    } else if (prevState.params !== params ||
      prevProps.deleteData !== deleteData) {
      this.reload();
    } else if (deleteError && prevProps.deleteError != deleteError) {
      this.setState({ error: deleteError });
    } else if (error && prevProps.error != error) {
      this.setState({ error: error });
    }
  }

  onAdd = () => {
    this.props.history.push('/stocks/add');
  }

  onReload = () => {
    this.reload();
  }
  onRowsDelete = (rowsDeleted) => {
    const { list } = this.props.data;

    const e = list[rowsDeleted.data[0].index];
    this.props.deleteById(e.id);

    return false;
  }

  onRowClick = rowData => {
    this.props.history.push(`/stocks/${rowData[0]}`);
  };

  onChangePage = (currentPage) => {
    const { params } = this.state;
    this.setState({ params: { ...params, page: currentPage } });
  }

  onChangeRowsPerPage = (numberOfRows) => {
    const { params } = this.state;
    this.setState({ params: { ...params, size: numberOfRows } });
  }

  onColumnSortChange = (changedColumn, direction) => {
    const { params } = this.state;
    const sort = direction === 'descending' ? 'desc' : 'asc';
    this.setState({ params: { ...params, sort } });
  }

  render() {
    const { classes, loading } = this.props;
    const { data, total, params, error } = this.state;

    const columns = [
      {
        name: "id",
        label: "ID",
        options: {
          sortDirection: params.sort
        }
      },
      {
        name: "item.name",
        label: "Item",
        options: {
          sort: false,
        }
      },
      {
        name: "quantity",
        label: "Quantity",
        options: {
          sort: false,
        }
      },
      {
        name: "unit.name",
        label: "Unit",
        options: {
          sort: false,
        }
      },
    ];
    const options = {
      serverSide: true,
      selecttableRows: 'single',
      page: params.page,
      count: total,
      rowsPerPage: params.size,
      filter: false,
      search: false,
      onRowClick: this.onRowClick,
      onRowsDelete: this.onRowsDelete,
      onChangePage: this.onChangePage,
      onChangeRowsPerPage: this.onChangeRowsPerPage,
      onSearchChange: this.onSearchChange,
      onColumnSortChange: this.onColumnSortChange,

      textLabels: {
        body: {
          noMatch: loading ?
            <Backdrop className={classes.backdrop} open={true} onClick={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
            : "Sorry, not macth records not found"
        }
      }
    }
    return (
      <Page error={error}>
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="primary" href="/stocksPageSummary"
            startIcon={< EventAvailableIcon />}>
            Stocks Summary List
            </Button> &nbsp;
          <Button variant="contained" color="primary"
            onClick={this.onAdd}
            startIcon={<AddCircleOutlineIcon />}>
            New Stock
          </Button>
        </div>
        <MUIDataTable
          title={"Stock List"}
          data={!loading ? data : []}
          columns={columns}
          options={options}
        />
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="primary"
            onClick={this.onReload}
            startIcon={<ReloadIcon />}
            disabled={loading}>
            Reload
          </Button>
        </div>

      </Page>
    );
  }
}


const mapStateToProps = state => ({
  deleteData: state.deleteStockById.data,
  deleteError: state.deleteStockById.error,
  data: state.findStocks.data,
  loading: state.findStocks.loading || state.deleteStockById.loading,
  error: state.findStocks.error || state.deleteStockById.error
});

const mapDispatchToProps = {
  deleteById, findAll
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(StocksPage)
);


