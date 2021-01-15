import { motion, useCycle } from "framer-motion"
import { Button } from "@windmill/react-ui"
import { VscChevronDown } from "react-icons/vsc"

const ClassDescDropdown = ({ classTitle, classDesc }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <div
      className="flex flex-col whitespace-normal"
      style={{ minWidth: `200px` }}
    >
      <Button
        onClick={() => toggleOpen()}
        size="small"
        iconRight={VscChevronDown}
        layout="outline"
        aria-label="Description"
        aria-haspopup="true"
        className="shadow-none text-left"
      >
        {classTitle}
      </Button>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: {
            opacity: 1,
            height: "auto",
          },
          collapsed: {
            opacity: 0,
            height: 0,
          },
        }}
        className="overflow-hidden"
      >
        <p className="pt-3 text-sm">{classDesc}</p>
      </motion.div>
    </div>
  )
}

export default ClassDescDropdown
