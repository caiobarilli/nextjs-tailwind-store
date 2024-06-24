import Link from 'next/link'
import Container from '@/components/Container'
import Title from '@/components/Title'
import Text from '@/components/Text'

const About: React.FC<{
  resume?: boolean
}> = ({ resume }) => {
  if (resume) {
    return (
      <section className="dark:bg-gray-900 bg-white py-8" data-testid="about">
        <Container className="py-8 px-6">
          <Title size="md" href="/">
            About
          </Title>

          <Text marginTop={true}>
            This template is inspired by the stunning nordic minimalist design -
            in particular:
            <br />
            <Link
              className="dark:text-gray-100 dark:hover:text-gray-500 text-gray-800 hover:text-gray-900 underline"
              href="http://savoy.nordicmade.com/"
              target="_blank"
              rel="noreferrer"
            >
              Savoy Theme
            </Link>
            {' created by '}
            <Link
              className="dark:text-gray-100 dark:hover:text-gray-500 text-gray-800 hover:text-gray-900 underline"
              href="https://nordicmade.com/"
            >
              https://nordicmade.com/
            </Link>
            {' and '}
            <Link
              className="dark:text-gray-100 dark:hover:text-gray-500 text-gray-800 hover:text-gray-900 underline"
              href="https://www.metricdesign.no/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.metricdesign.no/
            </Link>
          </Text>

          <Text>
            {'Lorem ipsum dolor sit amet, consectetur '}
            <Link href="/">random link</Link>
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vel risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit.
            Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in
            nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam
            vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget
            mi proin sed libero enim sed faucibus turpis in. Hac habitasse
            platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. At tempor commodo
            ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae
            congue eu consequat ac.
          </Text>
        </Container>
      </section>
    )
  }

  return (
    <section className="dark:bg-gray-900 bg-white py-8" data-testid="about">
      <Container className="py-8 px-6">
        <Title size="md" href="/">
          About
        </Title>

        <Text marginTop={true}>
          This template is inspired by the stunning nordic minimalist design -
          in particular:
          <br />
          <Link
            className="dark:text-gray-100 dark:hover:text-gray-500 text-gray-800 hover:text-gray-900 underline"
            href="http://savoy.nordicmade.com/"
            target="_blank"
            rel="noreferrer"
          >
            Savoy Theme
          </Link>
          {' created by '}
          <Link
            className="dark:text-gray-100 dark:hover:text-gray-500 text-gray-800 hover:text-gray-900 underline"
            href="https://nordicmade.com/"
          >
            https://nordicmade.com/
          </Link>
          {' and '}
          <Link
            className="dark:text-gray-100 dark:hover:text-gray-500 text-gray-800 hover:text-gray-900 underline"
            href="https://www.metricdesign.no/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.metricdesign.no/
          </Link>
        </Text>

        <Text>
          {'Lorem ipsum dolor sit amet, consectetur '}
          <Link href="/">random link</Link>
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel
          facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget
          felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris.
          Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum
          a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed
          libero enim sed faucibus turpis in. Hac habitasse platea dictumst
          quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non
          tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis
          volutpat est velit egestas dui id. At tempor commodo ullamcorper a.
          Volutpat commodo sed egestas egestas fringilla. Vitae congue eu
          consequat ac.
        </Text>

        <Text>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.
          Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc
          lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue
          quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec
          nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
          faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam
          sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor
          augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas
          dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas
          egestas fringilla. Vitae congue eu consequat ac.
        </Text>

        <Text>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.
          Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc
          lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue
          quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec
          nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
          faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam
          sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor
          augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas
          dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas
          egestas fringilla. Vitae congue eu consequat ac.
        </Text>

        <Text>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.
          Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc
          lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue
          quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec
          nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
          faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam
          sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor
          augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas
          dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas
          egestas fringilla. Vitae congue eu consequat ac.
        </Text>
      </Container>
    </section>
  )
}

export default About
