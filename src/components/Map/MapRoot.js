// IMPORT DEPENDENCIES
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import EsriLeafletMap from './Leaflet Map/EsriLeafletMap'
import ControlPanel from './ControlPanel/ControlPanel'
import {Grid, Row, Col} from 'react-bootstrap'

// RENDER THE CONTROL PANEL & THE MAP WITHIN A SINGLE COLUMN/ROW OF THE 'react-bootstrap' LAYOUT
@observer
class MapRoot extends Component {
  render = () => {
    return (
      <Grid>
        <Row>
          <Col>
            <ControlPanel />
            <EsriLeafletMap />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MapRoot