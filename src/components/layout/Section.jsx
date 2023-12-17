const Section = (props) => {
  return (
    <section className="mx-auto max-sm:px-6 max-md:px-8 max-lg:px-9 px-12 py-14 md:py-16 lg:py-20 max-w-[1200px]" id={props.id}>
      {props.children}
    </section>
  )
}

export default Section