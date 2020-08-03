import { findUnitById, findUnitInLocation, isInBounds, Unit, WorldState } from './world-state'
import { UnitMovedWorldEvent, WorldEvent } from './world-events'
import * as R from 'ramda'

export const applyEvent = (state: WorldState, event: WorldEvent): WorldState => {
  switch (event.type) {
    case 'unitMoved':
      return handleUnitMoved(state, event)
  }
}

const handleUnitMoved = (state: WorldState, event: UnitMovedWorldEvent): WorldState => {
  const { unitId, from, to } = event
  if (!from.isAdjacentTo(to)) {
    throw `Invalid unit movement between non-adjacent hexes ${from} to ${to}`
  }
  if (!isInBounds(to, state.map)) {
    throw `Invalid unit movement to out-of-bounds hex ${to}`
  }
  const unit = findUnitById(unitId, state)
  if (!unit) {
    throw `No unit found with ID ${unitId}`
  }
  if (findUnitInLocation(from, state)?.id != unitId) {
    throw `Invalid from location for unit movement`
  }
  if (findUnitInLocation(to, state)) {
    throw `Invalid unit movement to already-occupied hex`
  }
  const updatedUnit: Unit = { ...unit, location: to }
  const updatedUnits = R.append(updatedUnit, R.filter((unit) => unit.id != unitId, state.units))
  return { ...state, units: updatedUnits }
}
