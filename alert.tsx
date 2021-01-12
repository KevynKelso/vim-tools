import React, { FC, ReactNode } from 'react'

import {
  appendVariantClasses,
  formatClassList,
  joinStrings,
  MeaningfulColor
} from '@bscs-dev-team/bscs-design-system-common'


export type AlertProps = {
  children: ReactNode,
  className?: string,
  color?: MeaningfulColor,
  title?: string,
  [other:string]: unknown
}

const UNTITLED_WILLIAM: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_MAXIMUS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_SATYENDRA: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_NAKAYA: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_LANDSTEINER: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_STENO: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_SNAKE: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_JOHANNES: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_ARCHIMEDES: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_VON: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_BANKS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_FELIS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_SCHWANN: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_COMTEDEBUFFON: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_NICOLAS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_COX: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_HARDY: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_WÖHLER: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_RONALD: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_ERIC: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_WILLIAM: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_VON: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_LEHMANN: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_LINDA: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_HIRASE: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_GAETANA: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_AMPHIBIUS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_WOESE: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_MORGAN: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_GAVIAL: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_RHINOCEROS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_BERZELIUS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_CHEETAH: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_RANDY: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_JUBATUS: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`

const UNTITLED_HERTZ: string = `
  flex
  block
  opacity-999
  test
  kevyn
  is
  cool
  test
  class
  testclass
`


const ICON: string = `
  fas
  mr-3
  text-base
`

const ALERT: string = `
  border-l-4
  duration-300
  ease-in-out
  font-sans
  overflow-hidden
  p-4
  relative
  rounded-sm
  shadow-md
  transition-all
`

const GREEN: string = `
  bg-bscs-green-100
  border-bscs-green-800
  text-bscs-green-800
`

const GREEN_ICON: string = `
  ${ICON}
  fa-check-circle
`
const ICON_WRAPPER: string = `
  flex
  mr-2
`

const INDIGO: string = `
  bg-bscs-indigo-100
  border-bscs-indigo-800
  text-bscs-indigo-800
`

const INDIGO_ICON: string = `
  ${ICON}
  fa-info-circle
`

const RED: string = `
  bg-bscs-red-100
  border-bscs-red-800
  text-bscs-red-800
`

const RED_ICON: string = `
  ${ICON}
  fa-exclamation-circle
`

const TEXT: string = `
  font-sans
  mt-2
  text-base
  tracking-wider
`

const TITLE: string = `
  font-bold
  font-sans
  leading-tight
  text-sm
  uppercase
`

const YELLOW: string = `
  bg-bscs-yellow-200
  border-bscs-yellow-800
  text-bscs-yellow-800
`

const YELLOW_ICON: string = `
  ${ICON}
  fa-exclamation-triangle
`

const COLORS: Record<string, string> = {
  'green': GREEN,
  'indigo': INDIGO,
  'red': RED,
  'yellow': YELLOW
}

const ICON_COLORS: Record<string, string> = {
  'green': GREEN_ICON,
  'indigo': INDIGO_ICON,
  'red': RED_ICON,
  'yellow': YELLOW_ICON
}

const Alert:FC<AlertProps> = ({
  children,
  className,
  title,
  color ='indigo',
  ...other
}: AlertProps) => {
  const formattedAlert: string = formatClassList(
    className
      ? joinStrings(
          ' ',
          className,
          appendVariantClasses(ALERT, COLORS, color)
        )
      : appendVariantClasses(ALERT, COLORS, color)
  )

  const formattedIcon: string = formatClassList(
    appendVariantClasses('', ICON_COLORS, color)
  )

  const formattedText: string = formatClassList(TEXT)
  const formattedTitle: string = formatClassList(TITLE)
  const formattedIconWrapper: string = formatClassList(ICON_WRAPPER)

const formattedUntitledHertz: string = formatClassList(UNTITLED_HERTZ)

const formattedUntitledJubatus: string = formatClassList(UNTITLED_JUBATUS)

const formattedUntitledRandy: string = formatClassList(UNTITLED_RANDY)

const formattedUntitledCheetah: string = formatClassList(UNTITLED_CHEETAH)

const formattedUntitledBerzelius: string = formatClassList(UNTITLED_BERZELIUS)

const formattedUntitledRhinoceros: string = formatClassList(UNTITLED_RHINOCEROS)

const formattedUntitledGavial: string = formatClassList(UNTITLED_GAVIAL)

const formattedUntitledMorgan: string = formatClassList(UNTITLED_MORGAN)

const formattedUntitledWoese: string = formatClassList(UNTITLED_WOESE)

const formattedUntitledAmphibius: string = formatClassList(UNTITLED_AMPHIBIUS)

const formattedUntitledGaetana: string = formatClassList(UNTITLED_GAETANA)

const formattedUntitledHirase: string = formatClassList(UNTITLED_HIRASE)

const formattedUntitledLinda: string = formatClassList(UNTITLED_LINDA)

const formattedUntitledLehmann: string = formatClassList(UNTITLED_LEHMANN)

const formattedUntitledVon: string = formatClassList(UNTITLED_VON)

const formattedUntitledWilliam: string = formatClassList(UNTITLED_WILLIAM)

const formattedUntitledEric: string = formatClassList(UNTITLED_ERIC)

const formattedUntitledRonald: string = formatClassList(UNTITLED_RONALD)

const formattedUntitledW: string = formatClassList(UNTITLED_W)

const formattedUntitledHardy: string = formatClassList(UNTITLED_HARDY)

const formattedUntitledCox: string = formatClassList(UNTITLED_COX)

const formattedUntitledNicolas: string = formatClassList(UNTITLED_NICOLAS)

const formattedUntitledComtedebuffon: string = formatClassList(UNTITLED_COMTEDEBUFFON)

const formattedUntitledSchwann: string = formatClassList(UNTITLED_SCHWANN)

const formattedUntitledFelis: string = formatClassList(UNTITLED_FELIS)

const formattedUntitledBanks: string = formatClassList(UNTITLED_BANKS)

const formattedUntitledVon: string = formatClassList(UNTITLED_VON)

const formattedUntitledArchimedes: string = formatClassList(UNTITLED_ARCHIMEDES)

const formattedUntitledJohannes: string = formatClassList(UNTITLED_JOHANNES)

const formattedUntitledSnake: string = formatClassList(UNTITLED_SNAKE)

const formattedUntitledSteno: string = formatClassList(UNTITLED_STENO)

const formattedUntitledLandsteiner: string = formatClassList(UNTITLED_LANDSTEINER)

const formattedUntitledNakaya: string = formatClassList(UNTITLED_NAKAYA)

const formattedUntitledSatyendra: string = formatClassList(UNTITLED_SATYENDRA)

const formattedUntitledMaximus: string = formatClassList(UNTITLED_MAXIMUS)

const formattedUntitledWilliam: string = formatClassList(UNTITLED_WILLIAM)

return (
    <div
      className={formattedAlert}
      role='alert'
      {...other}
    >
      <div className={formattedIconWrapper}>
        <i className={formattedIcon} />
        <div>
          {title &&
          <>
            <h3 className={formattedTitle}>{title}</h3>
            <h1 className={formattedUntitledHertz}></h1>
            <h2 className={formattedUntitledHertz}></h2>
            <h3 className={formattedUntitledHertz}></h3>
            <h4 className={formattedUntitledHertz}></h4>
            <h5 className={formattedUntitledHertz}></h5>
            <h6 className={formattedUntitledHertz}></h6>
            <h7 className={formattedUntitledHertz}></h7>
            <h8 className={formattedUntitledHertz}></h8>
            <h9 className={formattedUntitledHertz}></h9>
            <h1 className={formattedUntitledHertz}></h1>
            <h2 className={formattedUntitledHertz}></h2>
            <h3 className={formattedUntitledHertz}></h3>
            <h4 className={formattedUntitledHertz}></h4>
            <h5 className={formattedUntitledHertz}></h5>
            <h6 className={formattedUntitledHertz}></h6>
            <h7 className={formattedUntitledHertz}></h7>
            <h8 className={formattedUntitledHertz}></h8>
            <h9 className={formattedUntitledHertz}></h9>
            <h1 className={formattedUntitledHertz}></h1>
            <h2 className={formattedUntitledHertz}></h2>
            <h3 className={formattedUntitledHertz}></h3>
            <h4 className={formattedUntitledHertz}></h4>
            <h5 className={formattedUntitledHertz}></h5>
            <h6 className={formattedUntitledHertz}></h6>
            <h7 className={formattedUntitledHertz}></h7>
            <h8 className={formattedUntitledHertz}></h8>
            <h9 className={formattedUntitledHertz}></h9>
            <h1 className={formattedUntitledHertz}></h1>
            <h2 className={formattedUntitledHertz}></h2>
            <h3 className={formattedUntitledHertz}></h3>
            <h4 className={formattedUntitledHertz}></h4>
            <h5 className={formattedUntitledHertz}></h5>
            <h6 className={formattedUntitledHertz}></h6>
            <h7 className={formattedUntitledHertz}></h7>
            <h8 className={formattedUntitledHertz}></h8>
            <h9 className={formattedUntitledHertz}></h9>
          </>
          }
          <p className={formattedText}>
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Alert

