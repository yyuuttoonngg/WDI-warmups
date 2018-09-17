require 'allergies'

describe Allergies do
  context 'with an invalid score' do
    it 'should raise an error when score is not an integer' do
      expect { Allergies.new('not an integer') }.to raise_error('invalid score')
    end

    it 'should raise an error when score is less than 0' do
      expect { Allergies.new(-1) }.to raise_error('invalid score')
    end

    it 'should raise an error when score is greater than 255' do
      expect { Allergies.new(256) }.to raise_error('invalid score')
    end
  end

  context 'with a valid score' do
    context 'equal to 0' do
      let(:allergies) { Allergies.new(0) }

      describe '#allergic_to?' do
        it 'should return false for chocolate' do
          expect(allergies.allergic_to?'chocolate').to eq false
        end
      end

      describe '#list' do
        it 'should return an empty list' do
          expect(allergies.list).to eq []
        end
      end
    end

    context 'equal to 34' do
      let(:allergies) { Allergies.new(34) }

      describe '#allergic_to?' do
        it 'should return true for chocolate' do
          expect(allergies.allergic_to?'chocolate').to eq true
        end

        it 'should return false for shellfish' do
          expect(allergies.allergic_to?'shellfish').to eq false
        end
      end

      describe '#list' do
        it 'should return a list containing chocolate and peanuts' do
          expect(allergies.list).to eq ['peanuts','chocolate']
        end
      end
    end

    context 'equal to 191' do
      let(:allergies) { Allergies.new(191) }

      describe '#allergic_to?' do
        it 'should return true for cats' do
          expect(allergies.allergic_to?'cats').to eq true
        end

        it 'should return false for pollen' do
          expect(allergies.allergic_to?'pollen').to eq false
        end
      end

      describe '#list' do
        it 'should return a list containing eggs, peanuts, shellfish, strawberries, tomatoes, chocolate and cats' do
          expect(allergies.list).to eq ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','cats']
        end
      end
    end
  end
end
