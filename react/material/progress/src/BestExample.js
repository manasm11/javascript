import LinearProgress from '@material-ui/core/LinearProgress';

function BestExample({loading}) {
  return loading && <LinearProgress color='secondary' />;
}

export default BestExample;
