import * as Popover from '@radix-ui/react-popover'
import { IconSmiley } from '../Icons'

const Emoji = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="emoji-button" aria-label="Update dimensions">
          <IconSmiley />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="emoji-popover"
          side="top"
          sideOffset={7}
          align="end"
          alignOffset={-13}
        >
          Emoji Picker?
          <Popover.Arrow className="emoji-arrow" width={14} height={7} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default Emoji
