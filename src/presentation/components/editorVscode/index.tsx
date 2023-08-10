import { Editor } from '@monaco-editor/react';
import { Box, Divider, Grid, Typography } from '@mui/material';

export default function EditorVscode({ label, onChange, value }: { value: any; label?: string; onChange: (value: any) => void }) {

  const handleEditorChange = (value: any) => {
    if (onChange) onChange(value);
  }

  return (
    <>
        <Box sx={{ my: 0, mx: 0 }}>
        <Grid container alignItems="center">
            <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
                {label}
            </Typography>
            </Grid>
        </Grid>
        </Box>
        <Divider sx={{ marginBottom: 2}} />
        <Editor height="95%" defaultLanguage="json"  defaultValue={value} onChange={handleEditorChange} />
    </>
  );
}