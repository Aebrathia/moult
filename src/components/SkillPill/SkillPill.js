import s from './SkillPill.module.css'

const SkillPill = ({ children, as = 'span' }) => {
  const As = as
  return (
    <As className={s.SkillPill}>{children}</As>
  )
}

export default SkillPill
