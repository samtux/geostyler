import * as React from 'react';
import { InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

import './MinScaleDenominator.css';

// default props
interface DefaultScaleDenominatorProps {
  label: string;
  placeholder: string;
}
// non default props
interface ScaleDenominatorProps extends Partial<DefaultScaleDenominatorProps> {
  value: number | undefined;
  onChange: ((newMinScale: number) => void);
}

/**
 * Input field for the minimum scale of a rule.
 */
class MinScaleDenominator extends React.Component<ScaleDenominatorProps, any> {

  public static defaultProps: DefaultScaleDenominatorProps = {
    label: 'Min. Scale',
    placeholder: 'Enter min. Scale (Optional)'
  };

  render() {

    return (
        <FormItem className="gs-min-scaledenominator" label={this.props.label} colon={false} >

          <InputNumber
            className="gs-min-scaledenominator-input"
            value={this.props.value}
            min={0} 
            placeholder={this.props.placeholder} 
            onChange={this.props.onChange} 
          />

        </FormItem>
    );
  }
}

export default MinScaleDenominator;
