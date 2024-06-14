import {Component} from 'react'

import {
  MainPart,
  Part1,
  Heading,
  Label,
  Input,
  Select,
  Option,
  SubmitButton,
  Part2,
  FormItem,
  MemeContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    renderedContainer: '',
  }

  updateImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  updateFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  renderContainer = event => {
    event.preventDefault()

    const {imageUrl, topText, bottomText, fontSize} = this.state
    console.log(fontSize)

    const finalContainer = (
      <MemeContainer imageUrl={imageUrl} data-testid="meme">
        <Text fontSize={fontSize}>{topText}</Text>
        <Text fontSize={fontSize}>{bottomText}</Text>
      </MemeContainer>
    )

    this.setState({renderedContainer: finalContainer})
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      renderedContainer,
    } = this.state

    return (
      <MainPart>
        <Heading>Meme Generator</Heading>
        <Part1>
          <Part2>{renderedContainer}</Part2>
          <FormItem onSubmit={this.renderContainer}>
            <Label htmlFor="imageInput">Image URL</Label>
            <Input
              value={imageUrl}
              onChange={this.updateImage}
              type="text"
              id="imageInput"
              placeholder="Enter the Image URL"
            />

            <Label htmlFor="topTextInput">Top Text</Label>
            <Input
              value={topText}
              onChange={this.updateTopText}
              type="text"
              id="topTextInput"
              placeholder="Enter the Top Text"
            />

            <Label htmlFor="bottomTextInput">Bottom Text</Label>
            <Input
              value={bottomText}
              onChange={this.updateBottomText}
              type="text"
              id="bottomTextInput"
              placeholder="Enter the Bottom Text"
            />

            <Label htmlFor="fontSizeInput">Font Size</Label>
            <Select
              value={fontSize}
              id="fontSizeInput"
              onChange={this.updateFontSize}
            >
              {fontSizesOptionsList.map(eachItem => (
                <Option key={eachItem.optionId}>{eachItem.displayText}</Option>
              ))}
            </Select>
            <SubmitButton type="submit">Generate</SubmitButton>
          </FormItem>
        </Part1>
      </MainPart>
    )
  }
}

export default MemeGenerator
