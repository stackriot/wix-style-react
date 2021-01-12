import React from 'react';
import { Col, Container, Row } from '../../../src/Grid';
import { Box, ColorInput, FillPreview, FormField, Tooltip } from '../../../src';
import { Cell, Layout } from '../../../src/Layout';
import { stVars as colors } from '../../../src/Foundation/stylable/colors.st.css';
import Text from '../../../src/Text';

function StylePanel({ onChange }) {
  const [mainColor, setMainColor] = React.useState(colors.B00);
  const [textColorPrimary, setTextColorPrimary] = React.useState(colors.D10);
  const [textColorPrimaryLight, setTextColorPrimaryLight] = React.useState(
    colors.D80,
  );
  const [textColorSecondary, setTextColorSecondary] = React.useState(
    colors.D20,
  );
  const [textColorSecondaryLight, setTextColorSecondaryLight] = React.useState(
    colors.D40,
  );
  const [dividerColor, setDividerColor] = React.useState(colors.D60);

  const updateCallback = () => {
    onChange({
      mainColor,
      textColorPrimary,
      textColorPrimaryLight,
      textColorSecondary,
      textColorSecondaryLight,
      dividerColor,
    });
  };

  React.useEffect(updateCallback, [
    mainColor,
    textColorPrimary,
    textColorPrimaryLight,
    textColorSecondary,
    textColorSecondaryLight,
    dividerColor,
  ]);

  return (
    <Container fluid>
      <Row>
        <Col>
          {/* Main colors */}
          <Text weight="bold">Components color</Text>
          <FormField label="Color" labelPlacement="left">
            <Box width="160px" marginLeft="auto">
              <ColorInput
                value={mainColor}
                onChange={color => setMainColor(color)}
              />
            </Box>
          </FormField>
          <FormField label="Preset" labelPlacement="left">
            <Box margin="10px">
              <Layout
                cols={5}
                justifyItems="center"
                alignItems="center"
                gap="20px"
              >
                <Cell span={1}>
                  <Box width={25}>
                    <Tooltip content="Primary">
                      <FillPreview
                        fill="#2B81CB"
                        onClick={() => setMainColor('#2B81CB')}
                      />
                    </Tooltip>
                  </Box>
                </Cell>
                <Cell span={1}>
                  <Box width={25}>
                    <Tooltip content="Destructive">
                      <FillPreview
                        fill="#D6453D"
                        onClick={() => setMainColor('#D6453D')}
                      />
                    </Tooltip>
                  </Box>
                </Cell>
                <Cell span={1}>
                  <Box width={25}>
                    <Tooltip content="Premium">
                      <FillPreview
                        fill="#8E21B1"
                        onClick={() => setMainColor('#8E21B1')}
                      />
                    </Tooltip>
                  </Box>
                </Cell>
                <Cell span={1}>
                  <Box width={25}>
                    <Tooltip content="Success">
                      <FillPreview
                        fill="#44823F"
                        onClick={() => setMainColor('#44823F')}
                      />
                    </Tooltip>
                  </Box>
                </Cell>
                <Cell span={1}>
                  <Box width={25}>
                    <Tooltip content="Warning">
                      <FillPreview
                        fill="#C68801"
                        onClick={() => setMainColor('#C68801')}
                      />
                    </Tooltip>
                  </Box>
                </Cell>
              </Layout>
            </Box>
          </FormField>

          {/* Text colors */}
          <Text weight="bold">Text colors</Text>
          <FormField label="Primary" labelPlacement="left">
            <Box width="160px" marginLeft="auto">
              <ColorInput
                value={textColorPrimary}
                onChange={color => setTextColorPrimary(color)}
              />
            </Box>
          </FormField>
          <FormField label="Primary light" labelPlacement="left">
            <Box width="160px" marginLeft="auto">
              <ColorInput
                value={textColorPrimaryLight}
                onChange={color => setTextColorPrimaryLight(color)}
              />
            </Box>
          </FormField>
          <FormField label="Secondary" labelPlacement="left">
            <Box width="160px" marginLeft="auto">
              <ColorInput
                value={textColorSecondary}
                onChange={color => setTextColorSecondary(color)}
              />
            </Box>
          </FormField>
          <FormField label="Secondary light" labelPlacement="left">
            <Box width="160px" marginLeft="auto">
              <ColorInput
                value={textColorSecondaryLight}
                onChange={color => setTextColorSecondaryLight(color)}
              />
            </Box>
          </FormField>
          <FormField label="Divider" labelPlacement="left">
            <Box width="160px" marginLeft="auto">
              <ColorInput
                value={dividerColor}
                onChange={color => setDividerColor(color)}
              />
            </Box>
          </FormField>
        </Col>
      </Row>
    </Container>
  );
}

export default StylePanel;
