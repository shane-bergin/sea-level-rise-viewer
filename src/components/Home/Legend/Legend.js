// IMPORT DEPENDENCIES
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import css from './Legend.css'
import RootStore from '../../../store'

@observer
class Legend extends Component {
  // Render all control panel sub-components in 'react-bootstrap' Grid
  render = () => {
    let townLinesLegend = (
      <Row style={{paddingTop: '1em', paddingBottom: '1em'}}>
        <Col xs={3} md={3} lg={3}>
          <div
            style={{backgroundColor: '#7e8b9e'}}
            className={css.colorBar}
          />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <strong>TOWN LINES</strong>
        </Col>
      </Row>
    )

    let disConRoadsLegend = (
      <Row style={{paddingTop: '1em'}}>
        <Col xs={3} md={3} lg={3}>
          <div style={{backgroundColor: 'red'}} className={css.colorBar} />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <strong>DISCONNECTED ROADS</strong>
        </Col>
      </Row>
    )

    let lowLyingAreasLegend = (
      <Row style={{paddingTop: '1em', paddingBottom: '1em'}}>
        <Col xs={3} md={3} lg={3}>
          <div
            style={{backgroundColor: '#63cc70'}}
            className={css.colorBar}
          />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <strong>LOW LYING AREAS</strong>
        </Col>
      </Row>
    )

    let critFacLegend = (
      <div>
        <Row style={{paddingTop: '1em'}}>
          <Col xs={3} md={3} lg={3}>
            <Image
              src={require('../ControlPanel/Layers/img/critFac.svg')}
              className={css.critFac}
            />
          </Col>
          <Col xs={9} md={9} lg={9}>
            <strong>CRITICAL FACILITIES</strong>
          </Col>
        </Row>
      </div>
    )

    let sloshLegend = (
      <div>
        <Row className={css.legendSubHeaders}>
          <strong>SLOSH</strong>
        </Row>
        <Row style={{paddingTop: '0.25em'}}>
          <Col xs={3} md={3} lg={3}>
            <div
              style={{backgroundColor: '#ff0000'}}
              className={css.colorBar}
            />
          </Col>
          <Col xs={9} md={9} lg={9}>
            <strong>CATEGORY 1</strong>
          </Col>
        </Row>
        <Row style={{paddingTop: '0.25em'}}>
          <Col xs={3} md={3} lg={3}>
            <div
              style={{backgroundColor: '#ff3411'}}
              className={css.colorBar}
            />
          </Col>
          <Col xs={9} md={9} lg={9}>
            <strong>CATEGORY 2</strong>
          </Col>
        </Row>
        <Row style={{paddingTop: '0.25em'}}>
          <Col xs={3} md={3} lg={3}>
            <div
              style={{backgroundColor: '#ff6823'}}
              className={css.colorBar}
            />
          </Col>
          <Col xs={9} md={9} lg={9}>
            <strong>CATEGORY 3</strong>
          </Col>
        </Row>
        <Row style={{paddingTop: '0.25em'}}>
          <Col xs={3} md={3} lg={3}>
            <div
              style={{backgroundColor: '#ff9c35'}}
              className={css.colorBar}
            />
          </Col>
          <Col xs={9} md={9} lg={9}>
            <strong>CATEGORY 4</strong>
          </Col>
        </Row>
        <Row style={{paddingTop: '0.25em'}}>
          <Col xs={3} md={3} lg={3}>
            <div
              style={{backgroundColor: '#ffd047'}}
              className={css.colorBar}
            />
          </Col>
          <Col xs={9} md={9} lg={9}>
            <strong>CATEGORY 5</strong>
          </Col>
        </Row>
      </div>
    )

    let femaLegend = (
      <div>
        <Row className={css.legendSubHeaders}>
          <strong>FEMA</strong>
        </Row>
        <Row>
          <Col xs={3} md={3} lg={3}  style={{paddingTop: '0.25em'}}>
            <div
              style={{backgroundColor: '#f1a800'}}
              className={css.colorBar}
            />
          </Col>
          <Col xs={9} md={9} lg={9} style={{paddingTop: '0.25em'}} >
            <strong>SPECIAL FLOOD HAZARD AREAS</strong>
          </Col>
        </Row>
        <Row>
          <Col xs={3} md={3} lg={3} style={{paddingTop: '0.25em'}} >
            <div
              style={{backgroundColor: '#d20000'}}
              className={css.colorBar}
            />
          </Col>
          <Col xs={9} md={9} lg={9} style={{paddingTop: '0.25em'}} >
            <strong>COASTAL HIGH HAZARD AREAS</strong>
          </Col>
        </Row>
      </div>
    )

    let intersectLegend = (
      <Row style={{paddingTop: '1em'}}>
        <Col xs={3} md={3} lg={3}>
          <Image
            src={require('../ControlPanel/Layers/img/critFac.svg')}
            className={css.affectedCritFac}
          />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <strong>AFFECTED CRITICAL FACILITIES</strong>
        </Col>
      </Row>
    )

    let legendTable = (
      <Grid>
        <Row
          className={
            RootStore.ControlPanelStore.panelButtonOpenness &&
            RootStore.EsriMapStore.loadingComplete
              ? css.LegendWrapperOpen
              : css.LegendWrapperClosed
          }
        >
          <Row className={css.legendInfoWrapper}>
            <Row className={css.legendTitle}>
              <strong>LEGEND</strong>
            </Row>
            <Row>
              <Col xs={6} md={6} lg={6}>
                {townLinesLegend}
                {RootStore.ControlPanelStore.sloshBackground ? sloshLegend : null}
              </Col>
              <Col xs={6} md={6} lg={6}>
                {RootStore.ControlPanelStore.currentSliderValue > 0
                  ? disConRoadsLegend
                  : null}
                {RootStore.ControlPanelStore.currentSliderValue > 0
                  ? intersectLegend
                  : null}
                {lowLyingAreasLegend}
                {RootStore.ControlPanelStore.femaFirmBackground ? femaLegend : null}
                {RootStore.ControlPanelStore.criticalFacilitiesBackground
                  ? critFacLegend
                  : null}
              </Col>
            </Row>
          </Row>
        </Row>
      </Grid>
    )

    return legendTable
  }
}
export default Legend
