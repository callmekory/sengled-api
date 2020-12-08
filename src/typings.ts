/*!
 * Coded by CallMeKory - https://github.com/callmekory
 * 'It’s not a bug – it’s an undocumented feature.'
 */

export interface SengledDevices {
  messageCode: string
  info: string
  description: string
  roomList: RoomList[]
  deviceNoRoomList: any[]
  deviceActiveHoursList: DeviceActiveHoursList[]
  success: boolean
}

export interface DeviceActiveHoursList {
  deviceUuid: string
  deviceName: string
  activeHours: number
}

export interface RoomList {
  roomId: number
  roomName: string
  roomImgType: number
  roomImgUrl: string
  roomStatus: number
  brightness: number
  colortemperature: number
  rgbColorR: number
  rgbColorG: number
  rgbColorB: number
  deviceList: DeviceInfo[]
  scheduleList: ScheduleList[]
}

export interface ScheduleList {
  scheduleId: number
  startTime: string
  endTime: string
  repeate: string
  onoff: number
  type: number
  brightness: number
  colorTemperature: number
}

export interface DeviceInfo {
  roomName: string
  deviceUuid: string
  gatewayUuid: string
  deviceName: string
  brightness: number
  colortemperature: number
  onoff: number
  signalQuality: number
  signalValue: number
  activeHours: number
  isOnline: number
  power: string
  onCount: number
  powerConsumptionTime: string
  productCode: string
  attributeIds: string
  rgbColorR: number
  rgbColorG: number
  rgbColorB: number
}
