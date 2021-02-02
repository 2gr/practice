Quando "começo um novo jogo" do
  run_command("forca")
end

Então "vejo na tela:" do |text|
  # stop_all_commands
  # expect(last_command_stopped.stdout).to include(text)
  combined_output = send("all_stdout")
  expect(combined_output).to send(:an_output_string_including, text)
end