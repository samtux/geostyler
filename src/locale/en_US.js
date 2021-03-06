'use strict';

import en_US from 'antd/lib/locale-provider/en_US';
export default {
    GsApp: {
        graphicalEditor: 'Graphical Editor',
        codeEditor: 'Code Editor'
    },
    GsBulkEditModals: {
        colorLabel: 'Select color',
        radiusLabel: 'Select radius',
        opacityLabel: 'Select opacity',
        symbolLabel: 'Select symbol',
        imageFieldLabel: 'Source',
        imageFieldTooltipLabel: 'Open Gallery'
    },
    GsRule: {
        removeRuleBtnText: 'Remove Rule',
        scaleFieldTitle: 'Use scale',
        filterFieldTitle: 'Use filter',
        nameFieldLabel: 'Name',
        nameFieldPlaceholder: 'Name eingeben'
    },
    GsStyle: {
        addRuleBtnText: 'Add Rule',
        removeRulesBtnText: 'Remove Rules',
        nameFieldLabel: 'Name',
        nameFieldPlaceholder: 'Enter Name',
        colorLabel: 'Select color',
        radiusLabel: 'Select radius',
        opacityLabel: 'Select opacity',
        symbolLabel: 'Select symbol',
        multiEditLabel: 'Multi edit',
        ruleGeneratorWindowBtnText: 'Classification'
    },
    GsStyleLoader: {
        label: 'Load Style: ',
        uploadButtonLabel: 'Upload Style'
    },
    GsDataLoader: {
        label: 'Load Data: ',
        uploadButtonLabel: 'Upload Data'
    },
    GsWfsParserInput: {
      requestButtonText: 'Get Data',
      urlLabel: 'Url',
      versionLabel: 'Version',
      typeNameLabel: 'FeatureTypeName',
      featureIDLabel: 'FeatureID',
      propertyNameLabel: 'PropertyName',
      maxFeaturesLabel: 'MaxFeatures',
      fetchParamsLabel: 'fetchParams'
    },
    GsCodeEditor: {
        downloadButtonLabel: 'Save as File',
        formatSelectLabel: 'Format'
    },
    GsWellKnownNameEditor: {
        radiusLabel: 'Radius',
        fillOpacityLabel: 'Fill-Opacity',
        fillColorLabel: 'Fill-Color',
        strokeColorLabel: 'Stroke-Color',
        strokeWidthLabel: 'Stroke-Width',
        strokeOpacityLabel: 'Stroke-Opacity',
        rotateLabel: 'Rotation'
    },
    GsFillEditor: {
        fillOpacityLabel: 'Fill-Opacity',
        fillColorLabel: 'Fill-Color',
        outlineColorLabel: 'Outline-Color',
        outlineWidthLabel: 'Outline-Width',
        outlineDasharrayLabel: 'Outline-Dasharray',
        graphicFillTypeLabel: 'Graphic Fill Type'
    },
    GsIconEditor: {
        imageLabel: 'Source',
        sizeLabel: 'Size',
        rotateLabel: 'Rotation',
        opacityLabel: 'Opacity',
        iconTooltipLabel: 'Open Gallery'
    },
    GsLineEditor: {
        colorLabel: 'Color',
        widthLabel: 'Width',
        opacityLabel: 'Opacity',
        dashLabel: 'Dash Pattern',
        dashOffsetLabel: 'Dash Offset',
        capLabel: 'Cap',
        joinLabel: 'Join',
        graphicStrokeTypeLabel: 'Graphic Stroke Type',
        graphicFillTypeLabel: 'Graphic Fill Type'
    },
    GsTextEditor: {
        templateFieldLabel: 'Template',
        opacityLabel: 'Text-Opacity',
        colorLabel: 'Text-Color',
        sizeLabel: 'Text-Size',
        offsetXLabel: 'Offset X',
        offsetYLabel: 'Offset Y',
        attributeComboPlaceholder: 'Select Field',
        rotateLabel: 'Rotation',
        haloColorLabel: 'Halo-Color',
        haloWidthLabel: 'Halo-Width',
        attributeNotFound: 'Field not found'
    },
    GsPropTextEditor: {
        propFieldLabel: 'Field',
        opacityLabel: 'Text-Opacity',
        colorLabel: 'Text-Color',
        sizeLabel: 'Text-Size',
        offsetXLabel: 'Offset X',
        offsetYLabel: 'Offset Y',
        attributeComboPlaceholder: 'Select Field',
        rotateLabel: 'Rotation',
        haloColorLabel: 'Halo-Color',
        haloWidthLabel: 'Halo-Width'
    },
    GsPreview: {
        openEditorText: 'Edit Symbolizer',
        closeEditorText: 'Close Editor'
    },
    GsColorField: {
        closeText: 'Close',
        editText: 'Change',
        chooseText: 'Pick',
    },
    GsKindField: {
        label: 'Kind',
        symbolizerKinds: {
            Mark: 'Mark',
            Fill: 'Fill',
            Icon: 'Icon',
            Line: 'Line',
            Text: 'Text'
        }
    },
    GsGraphicTypeField: {
      Mark: 'Mark',
      Icon: 'Icon'
    },
    GsScaleDenominator: {
        minScaleDenominatorLabelText: 'Min. Scale',
        maxScaleDenominatorLabelText: 'Max. Scale',
        minScaleDenominatorPlaceholderText: 'Enter min. Scale (Optional)',
        maxScaleDenominatorPlaceholderText: 'Enter max. Scale (Optional)'
    },
    GsWellKnownNameField: {
        label: 'Symbol',
        wellKnownNames: {
          Circle: 'Circle',
          Square: 'Square',
          Triangle: 'Triangle',
          Star: 'Star',
          Cross: 'Cross',
          X: 'X'
        }
    },
    GsSymbolizerEditorWindow: {
      symbolizersEditor: 'Symbolizer Editor'
    },
    GsFilterEditorWindow: {
      filterEditor: 'Filter Editor'
    },
    GsMultiEditor: {
      add: 'Add',
      remove: 'Remove'
    },
    GsUploadButton: {
      upload: 'Upload'
    },
    GsFilterTree: {
        andDrpdwnLabel: 'AND-Filter',
        orDrpdwnLabel: 'OR-Filter',
        notDrpdwnLabel: 'NOT-Filter',
        comparisonDrpdwnLabel: 'Comparison-Filter',
        addFilterLabel: 'Add Filter',
        changeFilterLabel: 'Change Filter',
        removeFilterLabel: 'Remove Filter',
        andFilterText: 'AND',
        orFilterText: 'OR',
        notFilterText: 'NOT'
    },
    GsRuleTable: {
      symbolizersColumnTitle: 'Symbolizers',
      nameColumnTitle: 'Name',
      filterColumnTitle: 'Filter',
      minScaleColumnTitle: 'Min. Scale',
      maxScaleColumnTitle: 'Max. Scale',
      amountColumnTitle: 'Amount',
      duplicatesColumnTitle: 'Duplicates'
    },
    GsRuleGenerator: {
      attribute: 'Attribute',
      generateButtonText: 'Classify',
      levelOfMeasurement: 'Level of Measurement',
      nominal: 'Nominal',
      ordinal: 'Ordinal',
      cardinal: 'Cardinal',
      numberOfRules: 'Number of Classes',
      colorRamp: 'Color Ramp',
      colorRampPlaceholder: 'Select…',
      colorRampMinClassesWarningPre: 'Color Ramp requires at least',
      colorRampMinClassesWarningPost: 'classes',
      symbolizer: 'Symbolizer',
      classification: 'Classification Method',
      classificationPlaceholder: 'Select…',
      equalInterval: 'Equal Interval',
      quantile: 'Quantile'
    },
    GsRuleGeneratorWindow: {
      ruleGenerator: 'Classification'
    },
    GsIconSelectorWindow: {
        windowLabel: 'Select Icon'
    },
    GsIconSelector: {
        librarySelectLabel: 'Select Library'
    },
    ...en_US
};
