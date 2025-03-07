import * as FieldSettings from '@sensenet/default-content-types/src/FieldSettings'

export const schema = [
  {
    ContentTypeName: 'GenericContent',
    DisplayName: '$Ctd-GenericContent,DisplayName',
    Description: '$Ctd-GenericContent,Description',
    Icon: 'Content',
    AllowedChildTypes: [],
    HandlerName: 'a',
    FieldSettings: [
      {
        Name: 'DisplayName',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ShortTextField',
        DisplayName: 'Display Name',
        Description: 'Content name. You can set any name you prefer without any restrictions.',
        ReadOnly: false,
        Compulsory: false,
        OutputMethod: 0,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:FileName',
        Type: 'ShortTextFieldSetting',
      },
      {
        Type: 'ReferenceFieldSetting',
        AllowMultiple: true,
        AllowedTypes: ['User'],
        SelectionRoots: ['/Root/IMS'],
        Name: 'Manager',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ReferenceField',
        DisplayName: 'Manager',
        Description: 'Manager of the user.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.ReferenceFieldSetting,
      {
        Type: 'ReferenceFieldSetting',
        Name: 'Owner',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ReferenceField',
        DisplayName: 'Owner',
        Description: 'Content owner.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.ReferenceFieldSetting,
      {
        Type: 'ShortTextFieldSetting',
        Name: 'Name',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ShortTextField',
        DisplayName: 'Name',
        Description: 'Specify a name that will appear in the address bar of the browser.',
        ReadOnly: false,
        Compulsory: true,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:Name',
      } as FieldSettings.ShortTextFieldSetting,
      {
        Type: 'NullFieldSetting',
        Name: 'Version',
        FieldClassName: 'SenseNet.ContentRepository.Fields.VersionField',
        DisplayName: 'Version',
        Description: 'Version number.',
        ReadOnly: true,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Advanced,
        VisibleEdit: FieldSettings.FieldVisibility.Advanced,
        VisibleNew: FieldSettings.FieldVisibility.Advanced,
      } as FieldSettings.NullFieldSetting,
      {
        Type: 'NullFieldSetting',
        Name: 'SiteRelativeUrl',
        FieldClassName: 'SenseNet.ContentRepository.Fields.BooleanField',
        DisplayName: 'Folder',
        Description: 'This field is true if content can contain other content.',
        ReadOnly: true,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.NullFieldSetting,
      {
        Name: 'CheckInComments',
        FieldClassName: 'SenseNet.ContentRepository.Fields.LongTextField',
        DisplayName: 'Checkin comments',
        Description: 'Comments for a new version.',
        ReadOnly: false,
        Compulsory: false,
        OutputMethod: 0,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        TextType: 'RichText',
        Type: 'LongTextFieldSetting',
      },
      {
        Type: 'LongTextFieldSetting',
        Name: 'Description',
        FieldClassName: 'SenseNet.ContentRepository.Fields.LongTextField',
        DisplayName: 'Description',
        Description: 'Description of the content.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:RichText',
      } as FieldSettings.LongTextFieldSetting,
      {
        Type: 'PasswordFieldSetting',
        ReenterTitle: 'Re-enter password',
        ReenterDescription: 'Re-enter password.',
        PasswordHistoryLength: 0,
        Name: 'Password',
        FieldClassName: 'SenseNet.ContentRepository.Fields.PasswordField',
        DisplayName: 'Password',
        Description: 'User password.',
        ReadOnly: false,
        Compulsory: true,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.PasswordFieldSetting,
      {
        Type: 'NullFieldSetting',
        Name: 'Hidden',
        FieldClassName: 'SenseNet.ContentRepository.Fields.BooleanField',
        DisplayName: 'Hidden',
        Description: 'If checked, content will not show up in navigation.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.NullFieldSetting,
      {
        Type: 'IntegerFieldSetting',
        Name: 'Index',
        FieldClassName: 'SenseNet.ContentRepository.Fields.IntegerField',
        DisplayName: 'Index',
        Description: 'Content order in navigation. Numbers closer to 0 will appear first.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Advanced,
        VisibleEdit: FieldSettings.FieldVisibility.Advanced,
        VisibleNew: FieldSettings.FieldVisibility.Advanced,
      } as FieldSettings.IntegerFieldSetting,
      {
        Type: 'BooleanFieldSetting',
        Name: 'EnableLifespan',
        FieldClassName: 'SenseNet.ContentRepository.Fields.BooleanField',
        DisplayName: 'Enable Lifespan',
        Description: 'Specify whether you want to define starting and end date for the validity of this content.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.BooleanFieldSetting,
      {
        Type: 'NullFieldSetting',
        Name: 'AllowedChildTypes',
        FieldClassName: 'SenseNet.ContentRepository.Fields.AllowedChildTypesField',
        DisplayName: 'Allowed child types',
        Description:
          'You can get and set which content types are explicitly allowed to be created under this content. It is a local setting.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.NullFieldSetting,
      {
        Type: 'ChoiceFieldSetting',
        AllowExtraValue: false,
        AllowMultiple: true,
        Options: [
          { Value: '0', Text: 'Inherited', Enabled: true, Selected: true },
          { Value: '1', Text: 'None', Enabled: true, Selected: false },
          { Value: '2', Text: 'Major only', Enabled: true, Selected: false },
          { Value: '3', Text: 'Major and minor', Enabled: true, Selected: false },
        ],
        DisplayChoice: '' as any,
        EnumTypeName: '',
        Name: 'InheritableVersioningMode',
        FieldClassName: 'SenseNet.ContentRepository.Fields.InheritableVersioningModeField',
        DisplayName: 'Version history',
        Description:
          'Specify whether the system should create a new version whenever you create or modify a content below this content.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:VersioningModeChoice',
      } as FieldSettings.ChoiceFieldSetting,
      {
        Type: 'DateTimeFieldSetting',
        DateTimeMode: FieldSettings.DateTimeMode.DateAndTime,
        Name: 'ModificationDate',
        FieldClassName: 'SenseNet.ContentRepository.Fields.DateTimeField',
        DisplayName: 'Modification Date',
        Description: 'Content was last modified on this date.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.DateTimeFieldSetting,
      {
        Type: 'ChoiceFieldSetting',
        AllowExtraValue: false,
        AllowMultiple: false,
        Options: [
          { Value: '0', Text: 'Inherited', Enabled: true, Selected: true },
          { Value: '1', Text: 'Off', Enabled: true, Selected: false },
          { Value: '2', Text: 'On', Enabled: true, Selected: false },
        ],
        DisplayChoice: FieldSettings.DisplayChoice.RadioButtons,
        EnumTypeName: '',
        Name: 'ApprovingMode',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ApprovingModeField',
        DisplayName: 'Content Approval For Current Content',
        Description: 'It shows the approval mode of the current content.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.ChoiceFieldSetting,
      {
        Type: 'ChoiceFieldSetting',
        AllowExtraValue: false,
        AllowMultiple: false,
        Options: [
          { Value: '0', Text: 'Inherited', Enabled: true, Selected: true },
          { Value: '1', Text: 'Off', Enabled: true, Selected: false },
          { Value: '2', Text: 'On', Enabled: true, Selected: false },
        ],
        DisplayChoice: FieldSettings.DisplayChoice.CheckBoxes,
        EnumTypeName: '',
        Name: 'InheritableApprovingMode',
        FieldClassName: 'SenseNet.ContentRepository.Fields.InheritableApprovingModeField',
        DisplayName: 'Content approval',
        Description:
          'Specify whether new or changed content below the current one should remain in a draft state until they have been approved.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:ApprovingModeChoice',
      } as FieldSettings.ChoiceFieldSetting,
      {
        Type: 'ChoiceFieldSetting',
        AllowExtraValue: false,
        AllowMultiple: false,
        Options: [
          { Value: '0', Text: 'Finalized', Enabled: true, Selected: false },
          { Value: '1', Text: 'Creating', Enabled: true, Selected: false },
          { Value: '2', Text: 'Modifying', Enabled: true, Selected: false },
          { Value: '3', Text: 'ModifyingLocked', Enabled: true, Selected: false },
        ],
        DisplayChoice: FieldSettings.DisplayChoice.DropDown,
        EnumTypeName: 'SenseNet.ContentRepository.Storage.ContentSavingState',
        Name: 'SavingState',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ChoiceField',
        DisplayName: 'Saving state',
        Description: 'State of multi-step saving.',
        ReadOnly: true,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.ChoiceFieldSetting,
      {
        Type: 'ChoiceFieldSetting',
        AllowExtraValue: false,
        AllowMultiple: false,
        Options: [
          { Value: '0', Text: 'Finalized', Enabled: true, Selected: false },
          { Value: '1', Text: 'Creating', Enabled: true, Selected: false },
          { Value: '2', Text: 'Modifying', Enabled: true, Selected: false },
          { Value: '3', Text: 'ModifyingLocked', Enabled: true, Selected: false },
        ],
        EnumTypeName: 'SenseNet.ContentRepository.Storage.ContentSavingState',
        Name: 'SavingState2',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ChoiceField',
        DisplayName: 'Saving state',
        Description: 'State of multi-step saving.',
        ReadOnly: true,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.ChoiceFieldSetting,
      {
        Type: 'LongTextFieldSetting',
        Name: 'ExtensionData',
        FieldClassName: 'SenseNet.ContentRepository.Fields.LongTextField',
        DisplayName: 'Extension data',
        Description: 'You can set extra data in this field which is useful when extending a content.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        TextType: 'LongText',
      } as FieldSettings.LongTextFieldSetting,
      {
        Type: 'LongTextFieldSetting',
        Name: 'QueryBuilder',
        FieldClassName: 'SenseNet.ContentRepository.Fields.LongTextField',
        DisplayName: 'Query builder',
        Description: 'You can set extra data in this field which is useful when extending a content.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:QueryBuilder',
      } as FieldSettings.LongTextFieldSetting,
      {
        Type: 'NullFieldSetting',
        Name: 'Avatar',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ImageField',
        DisplayName: 'Avatar',
        Description: 'Avatar image of user.',
        SelectionRoots: ['/demoavatars'],
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:Image',
      } as FieldSettings.NullFieldSetting,
      {
        Type: 'NumberFieldSetting',
        Name: 'RateAvg',
        FieldClassName: 'SenseNet.ContentRepository.Fields.NumberField',
        DisplayName: 'Average rate',
        Description: 'Average rate of the content.',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.NumberFieldSetting,
      {
        Format: 'en-US',
        MinValue: 0.0,
        Digits: 0,
        Name: 'ExpectedRevenue',
        FieldClassName: 'SenseNet.ContentRepository.Fields.CurrencyField',
        DisplayName: 'Expected revenue',
        ReadOnly: false,
        Compulsory: false,
        OutputMethod: 0,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        Type: 'CurrencyFieldSetting',
      },
      {
        Name: 'Color',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ColorField',
        DisplayName: 'Color',
        Description: 'Color',
        ReadOnly: false,
        Compulsory: false,
        OutputMethod: 0,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'Color',
        Type: 'ColorFieldSetting',
      },
      {
        Name: 'Binary',
        FieldClassName: 'SenseNet.ContentRepository.Fields.BinaryField',
        DisplayName: 'Binary',
        Description: 'The binary content of the document.',
        ReadOnly: false,
        Compulsory: false,
        OutputMethod: 0,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Hide,
        Type: 'BinaryFieldSetting',
      },
      {
        Name: 'MimeType',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ShortTextField',
        DisplayName: 'Document MIME type',
        ReadOnly: true,
        Compulsory: false,
        OutputMethod: 0,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        Type: 'ShortTextFieldSetting',
      },
      {
        Type: 'ShortTextFieldSetting',
        Name: 'HairColor',
        FieldClassName: 'SenseNet.ContentRepository.Fields.ShortTextField',
        DisplayName: 'Hair color',
        Description: '',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
        ControlHint: 'sn:ColorPicker',
      } as FieldSettings.ShortTextFieldSetting,
      {
        Type: 'NullFieldSetting',
        Name: 'UrlList',
        FieldClassName: 'SenseNet.ContentRepository.Fields',
        DisplayName: 'Url list',
        Description: '',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.NullFieldSetting,
      {
        Type: 'NulllFieldSetting',
        Name: 'TypoField',
        FieldClassName: 'SenseNet.ContentRepository.Fields',
        DisplayName: 'Typo field',
        Description: '',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.NullFieldSetting,
      {
        Type: 'File',
        Name: 'FileField',
        FieldClassName: 'SenseNet.ContentRepository.Fields',
        DisplayName: 'File field',
        Description: '',
        ReadOnly: false,
        Compulsory: false,
        VisibleBrowse: FieldSettings.FieldVisibility.Show,
        VisibleEdit: FieldSettings.FieldVisibility.Show,
        VisibleNew: FieldSettings.FieldVisibility.Show,
      } as FieldSettings.NullFieldSetting,
    ],
  },
]
